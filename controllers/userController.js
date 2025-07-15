const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    console.log("Admin Email:", adminEmail);
console.log("Admin Password:", adminPassword);

console.log("Request Body:", req.body);

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide email and password"
      });
    }

    if (email === adminEmail && password === adminPassword) {
      const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });

      // Corrected 'setHeader' method
      res.setHeader("Set-Cookie", `token=${token}; Path=/; Max-Age=3600; SameSite=Strict; Secure`);

      res.status(200).json({ success: true });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }

  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({
      success: false,
      message: "Error during login",
      error: error.message
    });
  }
};


const logout = (req, res) => {
  res.cookie('token', '', {
    httpOnly: true,
    expires: new Date(0), // Set expired date
    sameSite: 'Strict',
    secure: process.env.NODE_ENV === 'production',
  });

  res.status(200).json({ message: 'Logged out successfully' });
}

module.exports = { login,logout };

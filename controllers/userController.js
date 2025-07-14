
const login = async(req,res)=>{
  try{
  const {email,password} =req.body;

const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if(!email || !password){
    return res.status(400).json({success:false,message:"Please provide email and password"});

  }
if (email === adminEmail && password === adminPassword) {

    const token= jwt.sign({email}, process.env.jwt_secret,{expiresIn:'1h'});
    res.setheader("Set-Cookie", `token=${token}; Path=/; Max-Age=3600; SameSite=Strict; Secure`)
    // Ideally, you'd use JWT or session here
    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ success: false });
  }

}catch(error){
    console.error("Error searching competitions:", error);
    res.status(500).json({success:false,message:"Error searching competitions",error:error.message});
  }
}

// module.exports = { info_save, getCompetition };
module.exports = { login};


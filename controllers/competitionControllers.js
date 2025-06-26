const competition = require('../models/competition_model');

// Save competition data
const info_save = (req, res) => {
  const {
    type,
    name,
    label,
    deadline,
    timePeriod,
    about,
    fee,
    financial_aid,
    video,
    application,
    location_mode,
  } = req.body;

  const newCompetition = new competition({
    type,
    name,
    label,
    deadline,
    timePeriod,
    about,
    fee,
    financial_aid,
    video,
    application,
    location_mode,
  });

  newCompetition.save()
    .then(() => {
      console.log("Competition info saved successfully!");
      res.status(201).json({ message: "Competition info saved successfully!" });
    })
    .catch((err) => {
      console.error("Error saving competition info:", err);
      res.status(500).json({ message: "Error saving competition info", error: err.message });
    });
};

// Get list of competitions
const getCompetition = async (req, res) => {
  try {
    const competitions = await competition.find(); // Optional: sort by deadline
    res.status(200).json(competitions);
  } catch (err) {
    console.error("Error fetching competitions:", err);
    res.status(500).json({ message: "Failed to retrieve competitions", error: err.message });
  }
};

// module.exports = { info_save, getCompetition };
module.exports = { info_save, getCompetition };

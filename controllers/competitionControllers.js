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

  const imageUrl = req.file?.path || '';

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
    imageUrl
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


const filter_comp= async (req, res)=>{
  try {
    const {
      keyword,
      type,
      label,
      fee,
      financial_aid,
      location_mode,
      deadline,
      about,
      timePeriod,
      page = 1,
      limit = 20
    } = req.query;

}catch(err){

  console.error(err)
  
}
}


const getDetails=async (req, res) =>{

  try{
    const {id}= req.params;
    const data= await competition.findById(id);
    if (!data) {
      return res.status(404).json({ error: 'Not found' });
    }
      return res.json(data);

  }catch(error){
console.error(error);
return res.status(500).json({error:'server error'})
  }

 
}


const searchCompetitions = async(req,res)=>{
  try{
  const {keyword} =req.query.keyword || "";
  const regex = new RegExp(keyword, 'i');
  const result = await competition.find({
   $or: [
    { name: regex },
    { type: regex },
    { label: regex },
    { deadline: regex },
    { timePeriod: regex },
    { about: regex },
    { fee: regex },
    { financial_aid: regex },
    { application: regex },
    { location_mode: regex }
  ]
  })
res.status(200).json({ success: true, data: result });
  }catch(error){
    console.error("Error searching competitions:", error);
    res.status(500).json({success:false,message:"Error searching competitions",error:error.message});
  }
}

// module.exports = { info_save, getCompetition };
module.exports = { info_save, getCompetition, filter_comp,getDetails,searchCompetitions};


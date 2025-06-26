
const competition = require('../models/competition_model');


// type: "",
//     name: "",
//     label: "",
//     deadline: "",
//     timePeriod: "",
//     about: "",
//     fee:"",
//     financial_aid:"",
//     video:"",
//     application:"",
//     location_mode:"",


const info_save = (req, res) => {
 
 const{
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
}  = req.body;

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
} )


newCompetition.save()
.then(()=>{
    console.log("Competition info saved successfully!");
    res.status(201).json({message:"Competition info sved successfully!"});
})
.catch((err)=>{
    console.error("Error saving competition info:", err);
    res.status(500).json({message:"Error saving competition info",error:err.message});
})




};

module.exports = info_save;
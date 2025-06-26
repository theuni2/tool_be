const mongoose =require('mongoose');

const competition_db= new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    label: {
        type: String
    },
    deadline: {
        type: String,  // Consider changing to Date if storing actual date
    },
    timePeriod: {
        type: String
    },
    about: {
        type: String
    },
    fee: {
        type: String
    },
    financial_aid: {
        type: String
    },
    video: {
        type: String  // URL to video if applicable
    },
    application: {
        type: String  // URL or instruction
    },
    location_mode: {
        type: String  // e.g., "Online", "Offline", "Hybrid"
    }
}, {
    timestamps: true
});

module.exports=mongoose.model('competition', competition_db);
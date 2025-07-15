const mongoose = require('mongoose');

const competition_db = new mongoose.Schema({
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
    type: String  // ✅ Consider using Date if it's a real deadline
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
    type: String  // URL
  },
  application: {
    type: String
  },
  location_mode: {
    type: String
  },
  imageUrl: {
    type: String
  },
  financial_aid_grade:{
    type:String
  },
  selectivity:{
    type:String
  },

}, {
  timestamps: true
});

// 🔍 Add full-text search index here
competition_db.index({
  name: 'text',
  type: 'text',
  label: 'text',
  about: 'text',
  deadline: 'text',
  timePeriod: 'text',
  fee: 'text',
  financial_aid: 'text',
  application: 'text',
  location_mode: 'text',
  selectivity: 'text',
  // timeline: 'text',
  financial_aid_grade: 'text'
});

module.exports = mongoose.model('competition', competition_db);

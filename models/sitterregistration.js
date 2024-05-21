const mongoose = require("mongoose");
const sitterSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  location: {
    type: String,
    trim: true,
  },
  dob: {
    type: String,
    trim: true,
  },
  nin: {
    type: String,
    trim: true,
  },
  nextOfKin: {
    type: String,
    trim: true,
  },

  recommendersName: {
    type: String,
    trim: true,
  },
  gender: {
    type: String,
    trim: true,
  },
  educationLevel: {
    type: String,
    trim: true,
  },
  sitterNumber: {
    type: String,
    trim: true,
  },
  contact: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    trim: true
  },
});
module.exports = mongoose.model("Sitter", sitterSchema);

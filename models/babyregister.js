const mongoose = require("mongoose");
const babySchema = new mongoose.Schema({
  babyName: {
    type: String,
    trim: true,
  },
  babyGender: {
    type: String,
    trim: true,
  },
  babyAge: {
    type: String,
    trim: true,
  },
  location: {
    type: String,
    trim: true,
  },
  personBrought: {
    type: String,
    trim: true,
  },
  parentName: {
    type: String,
    trim: true,
  },
  fee: {
    type: String,
    trim: true,
  },
  periodOfStay: {
    type: String,
    trim: true,
  },
  babyNumber: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("Baby", babySchema);

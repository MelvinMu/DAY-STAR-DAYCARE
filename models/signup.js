const mongoose = require("mongoose");
const feedschema = new mongoose.Schema({
  adminEmail: {
    type: Number,
    trim: true,
  },
  adminPassword: {
    type: String,
    trim: true,
  },
  sitterEmail: {
    type: String,
    trim: true,
  },
  sitterPassword: {
    type: String,
    trim: true,
  },
  parentPassword: {
    type: String,
    trim: true,
  },
  parentPassword: {
    type: Number,
    trim: true,
  },
});
module.exports = mongoose.model("Feed", feedschema);

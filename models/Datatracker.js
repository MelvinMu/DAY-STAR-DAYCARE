const mongoose = require("mongoose");
const dataschema = new mongoose.Schema({
    babyname:{
        type: Number,
        trim: true
    },
    babyhealth:{
        type: Number,
        trim: true
    },
    babyMilestones:{
        type: String,
        trim: true
    },
    recommendations:{
        type: Number,
        trim: true
    },
}); 
module.exports = mongoose.model("data", dataschema);
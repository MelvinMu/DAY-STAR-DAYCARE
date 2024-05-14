const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema({
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
    recommendation:{
        type: Number,
        trim: true
    },
}); 
module.exports = mongoose.model("Data", dataSchema);
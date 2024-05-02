const mongoose = require("mongoose");
const feedschema = new mongoose.Schema({
    rating:{
        type: Number,
        trim: true
    },
    comments:{
        type: Number,
        trim: true
    },
    name:{
        type: String,
        trim: true
    },
    phone:{
        type: Number,
        trim: true
    },
}); 
module.exports = mongoose.model("Feedback", feedschema);
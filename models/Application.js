const mongoose = require("mongoose");
const Parentschema = new mongoose.Schema({
    parentName:{
        type: String,
        trim: true
    },
    parentNumber:{
        type: Number,
        trim: true
    },
    childName:{
        type: String,
        trim: true
    },
    parentAddress:{
        type: String,
        trim: true
    },
    emergencyContact:{
        type: String,
        trim: true
    },
}); 
module.exports = mongoose.model("Application", Parentschema);
const mongoose = require("mongoose");
const sitterSchema = new mongoose.Schema({
    firstName:{
        type: String,
        trim: true,
        required:true
    },
    lastName:{
        type: String,
        trim: true,
        required:true
    },
    location:{
        type: String,
        trim: true,
        required:true
    },
    dob:{
        type: String,
        trim: true,
        required:true
    },
    nin:{
        type: String,
        trim: true,
        required:true
    },
    nextOfKin:{
        type: String,
        trim: true,
        required:true
    },
    
    recommendersName:{
        type: String,
        trim: true,
        required:true
    },
    gender:{
        type: String,
        trim: true,
        required:true
    },
    educationLevel:{
        type: String,
        trim: true,
        required:true
    },
    sitterNumber:{
        type: String,
        trim: true,
        required:true
    },
    contact:{
        type: String,
        trim: true,
        required:true
    },
});
module.exports = mongoose.model("Sitter", sitterSchema);

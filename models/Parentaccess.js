const mongoose = require("mongoose");
const accessSchema = new mongoose.Schema({
    babyName:{
        type: Number,
        trim: true
    },
    
}); 
module.exports = mongoose.model("Access", accessSchema);
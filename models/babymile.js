const mongoose = require("mongoose");
const mileSchema = new mongoose.Schema({
    babyName:{
        type: String,
        trim: true,
        required:true
    },
    milestone:{
        type: String,
        trim: true,
        required:true
    },
    recommendation:{
        type: String,
        trim: true,
        required:true
    },
    taskList:{
        type: String,
        trim: true,
        required:true
    },
});
module.exports = mongoose.model("Mile", mileSchema);

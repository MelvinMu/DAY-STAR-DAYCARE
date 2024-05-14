const mongoose = require("mongoose");
const paySchema = new mongoose.Schema({
    sitterName:{
        type: String,
        trim: true,
        required:true
    },
    amount:{
        type: String,
        trim: true,
        required:true
    },
    telephone:{
        type: String,
        trim: true,
        required:true
    },
    date:{
        type: String,
        trim: true,
        required:true
    },
});
module.exports = mongoose.model("Pay", paySchema);

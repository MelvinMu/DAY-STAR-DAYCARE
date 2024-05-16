const mongoose = require("mongoose");
const ProcureSchema = new mongoose.Schema({
    itemName:{
        type: String,
        trim: true,
        required:true
    },
    quantity:{
        type: String,
        trim: true,
        required:true
    },
    unitPrice:{
        type: String,
        trim: true,
        required:true
    },

});
module.exports = mongoose.model("Procure", ProcureSchema);

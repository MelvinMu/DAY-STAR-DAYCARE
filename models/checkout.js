const mongoose = require("mongoose");
const checkoutSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true
    },
    baby:{
        type:String,
        trim:true
    },
    time:{
        type:String,
        trim:true
    },
    comment:{
        type:String,
        trim:true
    },
})
module.exports = mongoose.model("Checkout", checkoutSchema)
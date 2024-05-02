//Intoducing Mongoose to the model file
const mongoose = require("mongoose")



//use the function to build schema
const contactSchema = new mongoose.Schema(
    {
        email:{
            type: String,
            trim: true
        },
        password:{
            type: Number,
            trim: true
        },
        address:{
            type: String,
            trim: true
        },
        address2:{
            type: String,
            trim: true
        },
        city:{
            type: String,
            trim: true
        },
    }); 
    module.exports = mongoose.model("form", contactSchema);

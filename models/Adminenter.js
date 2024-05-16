const mongoose = require("mongoose");
const PassportLocalMongoose = require("passport-local-mongoose");
const adminenterSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        trim:true
    },
    role:{
        type:String,
        trim:true
    },
})


adminenterSchema.plugin(PassportLocalMongoose, {
    usernameField:"email"
})
module.exports = mongoose.model("Adminenter", adminenterSchema)
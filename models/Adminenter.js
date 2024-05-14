const mongoose = require("mongoose");
const PassportLocalMongoose = require("passport-local-mongoose");
const adminSchema = new mongoose.schema({
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


adminSchema.plugin(PassportLocalMongoose, {
    usernameField:"email"
})
module.exports = mongoose.model("Login", adminSchema)
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose")
const registerSchema = new mongoose.Schema({
    username:{
        type: String,
        trim: true
    },
    // adminPassword:{
    //     type: Number,
    //     trim: true
    // },
    role:{
        type: String,
        trim:true
    },
    name:{
        type: String,
        trim: true
    },
    password:{
        type: String,
        trim: true
    },
    parentAddress:{
        type: String,
        trim: true
    },
    parentNumber:{
        type: String,
        trim: true
    },
    childName:{
        type: String,
        trim: true
    },
    username:{
        type: String,
        trim: true
    },
 emergencyContact:{
        type: String,
        trim: true
    }
}); 

registerSchema.plugin(passportLocalMongoose, {
    usernameField:"username"
}) 

module.exports = mongoose.model("firstregister", registerSchema);
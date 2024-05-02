//Introduce Express
const express = require("express");


//Access router function in express
const router = express.Router();

//Introduce the model
const Contact = require("../models/form")

//Create the route
router.get("/form",(req, res) => {
    res.render("form");//redirect the file name you are working on
});

//Posting the post routes
router.post("/form", async(req, res) => {
try{
    const contact = new Contact(req.body);
    await contact.save();
    console.log(req.body); 
    res.redirect("/Parent")
}
catch{error}(
    console.log(error)
)
});


//exportation
module.exports = router
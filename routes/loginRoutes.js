const express = require("express");
const router = express.Router();
const passport =require("passport");

router.get("/login", (req, res)=>{
    res.render("firstregister")
})

router.post("/login", passport.authenticate("local",{failureRedirect: "/login"}), (req, res)=> {
    res.redirect("/Parent") 
 })
module.exports = router

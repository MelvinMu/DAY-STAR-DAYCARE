const express = require("express");
const router = express.Router();

//import model
const Login = require("../models/Adminenter")

router.get("/", (req, res) =>{
    res.render("adminreg")
});
router.post("/register", (req, res) =>{
    try {
        const adminreg = new Register(req.body);
         await Register.register(adminreg,req.body.password,(err)=>{
            if(err){
                throw err
            }
            res.redirect("/")
         })




    } catch (error) {
        
    }
})
module.exports = router;
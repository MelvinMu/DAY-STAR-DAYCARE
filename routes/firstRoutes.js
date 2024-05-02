const express = require("express");
const router = express.Router(); 

//import model
const firstregister = require("../models/firstregister")

router.get("/firstregister", (req, res) =>{
    res.render("registration");
});


router.post("/firstregister", async(req, res) => {
    try {
        const register = new firstregister(req.body);
        await firstregister.register(register,req.body.password,(err)=>{
            if(err){
                throw err
            }
            res.redirect("/Parent")
        })
    } catch (error) {
        res.status(400).send("Failed to register")
        console.log(error)
    }
})
module.exports = router;
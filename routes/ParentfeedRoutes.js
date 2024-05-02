const express = require("express");
const router = express.Router();

//import model
const Parentfeed = require("../models/Parentfeed");

router.get("/Parentfeed", (req, res) => {
  res.render("Parentfeedback");
});

router.post("/Parentfeed", async (req, res) => {
  try {
    const register = new sitterregistration(req.body);
    await sitterregistration.register(register, req.body.password, (err) => {
      if (err) {
        throw err;
      }
      res.redirect("/");
    });
  } catch (error) {
    res.status(400).send("Failed to register");
    console.log(error);
  }
});
module.exports = router;

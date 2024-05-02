const express = require("express");
const router = express.Router();

//import model
const Datatracker = require("../models/Datatracker");

router.get("/data", (req, res) => {
  res.render("Datatracker");
});

router.post("/data", async (req, res) => {
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

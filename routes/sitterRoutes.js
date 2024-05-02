const express = require("express");
const router = express.Router();

//import model
const sitterregistration = require("../models/sitterregistration");

router.get("/sitterregister", (req, res) => {
  res.render("sitterreg");
});

router.post("/sitterregister", async (req, res) => {
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

const express = require("express");
const router = express.Router();

//import model
const sitterregistration = require("../models/sitterregistration");

router.get("/babyregister", (req, res) => {
  res.render("registration");
});

router.post("/babyregister", async (req, res) => {
  try {
    const register = new sitterregister(req.body);
    await sitterregister.register(register, req.body.password, (err) => {
      if (err) {
        throw err;
      }
      res.redirect("/sitterregister");
    });
  } catch (error) {
    res.status(400).send("Failed to register");
    console.log(error);
  }
});
module.exports = router;

//updating a baby in the database
router.get("/babiesUpdate/:id", async (req, res) => {
  //babiesUpdate can be any
  try {
    const babyUpdate = await BabiesRegisterModel.findOne({
      _id: req.params.id,
    });
    res.render("babiesUpdate", { baby: babyUpdate });
  } catch (error) {
    console.log("error finding a baby!", error);
    res.status(400).send("unable to find baby from the db!");
  }
});

router.post("/babiesUpdate", async (req, res) => {
  try {
    await BabiesRegisterModel.findOneAndUpdate({ _id: req.query.id }, req.body);
    res.redirect("/babies");
  } catch (error) {
    res.status(404).send("unable to update baby in the db!");
  }
});

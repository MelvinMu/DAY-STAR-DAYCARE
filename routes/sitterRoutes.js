const express = require("express");
const router = express.Router();

//import model
const Sitter = require("../models/sitterregistration");

router.get("/sitterregister", (req, res) => {
  res.render("sitterreg");
});

router.post("/sitterregister", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      location,
      dob,
      nin,
      nextOfKin,
      recommenderName,
      gender,
      religion,
      educationLevel,
      sitterNumber,
      contact,
    } = req.body;
    if (
      !firstName ||
      !lastName ||
      !location ||
      !dob ||
      !nin ||
      !nextOfKin ||
      !recommenderName ||
      !gender ||
      !religion ||
      !educationLevel ||
      !sitterNumber ||
      !contact
    ) {
      res.status(400);
      throw new Error("Please fill all required fields");
    }
    const newSitter = await Sitter.create({
      firstName: firstName,
      lastName: lastName,
      location: location,
      dob: dob,
      nin: nin,
      nextOfKin: nextOfKin,
      recommendersName: recommenderName,
      gender: gender,
      religion: religion,
      educationLevel: educationLevel,
      sitterNumber: sitterNumber,
      contact: contact,
    });
    if (!newSitter) {
      res.status(400);
      throw new Error("Sitter not registered");
    }
    res.redirect("/sitterlist");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/sitterlist", async (req, res) => {
  try {
    let sitters = await Sitter.find();
    res.render("sitterlist", { sitters: sitters });
    console.log("display sitters", sitters);
  } catch (error) {
    res.status(400).send("unable to find sitters from database!");
    console.log("unable to find sitters from database!...", error);
  }
});

//updating a sitter in the database
router.get("/sitterupdate/:id", async (req, res) => {
  try {
    const SitterUpdate = await Sitter.findOne({
      _id: req.params.id,
    });
    res.render("sitterupdate", { sitter: SitterUpdate });
  } catch (error) {
    console.log("error finding a sitter!", error);
    res.status(400).send("unable to find sitter from the db!");
  }
});

router.post("/sitterupdate", async (req, res) => {
  try {
    await Sitter.findByIdAndUpdate({ _id: req.query.id }, req.body);
    res.redirect("/sitterlist");
  } catch (error) {
    res.status(404).send("unable to update sitter in the db!");
  }
});



router.post("/sitterdelete", async (req, res) => {
  try {
    await Sitter.deleteOne({ _id: req.body.id });

    res.redirect("back");
  } catch (error) {
    console.log("error finding a sitter!", error);
    res.status(400).send("unable to find sitter from the db!");
  }
});

module.exports = router;

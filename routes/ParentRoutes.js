const express = require("express");
const router = express.Router();

//import model
const Application = require("../models/Application");
const firstregister = require("../models/firstregister");
router.get("/Parent", (req, res) => {
  res.render("Parent");
});

router.post("/Parent", async (req, res) => {
  try {
    const Child = new Application(req.body);
    console.log(Child);
    await Child.save();
    res.redirect("/firstregister");
  } catch (error) {
    //incase of error
    res.status(400).send("sorry something went wrong");
    console.log("Error registering the baby..", error);
  }

  //res.redirect("/index")
  res.redirect("success");
});

//fetching parents from the database
router.get("/Parent", async (req, res) => {
  try {
    let Parent = await Parent.find();
    res.render("parent", { Parent: Parent });
  } catch (error) {
    res.status(400).send("unable to fetch Parents from the database");
  }
  res.render("Parent");
});

module.exports = router;

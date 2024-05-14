const express = require("express");
const router = express.Router();

//import model
const Mile = require("../models/babymile");

router.get("/babymile", (req, res) => {
  res.render("babymilestones");
});

router.post("/babymile", async (req, res) => {
  try {
    const { babyName, milestone, recommendation, taskList } = req.body;
    if (!babyName || !milestone || !recommendation || !taskList) {
      res.status(400);
      throw new Error("Please fill all required fields");
    }
    const newMile = await Mile.create({
      babyName: babyName,
      milestone: milestone,
      recommendation: recommendation,
      taskList: taskList,
    });
    if (!newMile) {
      res.status(400);
      throw new Error("Milestone not registered");
    }
    res.redirect("/");
  } catch (error) {
    res.status(400).send(error.message);
  }
});
module.exports = router;

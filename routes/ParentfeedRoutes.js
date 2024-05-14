const express = require("express");
const router = express.Router();

//import model
const Feed = require("../models/Parentfeed");

router.get("/Parentfeed", (req, res) => {
  res.render("Parentfeedback");
});

router.post("/Parentfeed", async (req, res) => {
  try {
    const {
      rating,
      comments,
      name,
      phone,
    } = req.body;
    if (
      !rating ||
      !comments||
      !name ||
      !phone 
    ) {
      res.status(400);
      throw new Error("Please fill all required fields");
    }
    const newFeed = await Feed.create({
      rating:rating,
      comments:comments,
      name:name,
      phone:phone,
    });
    if (!newFeed){
      res.status(400)
      throw new Error("Feedback not attained")
    }
    res.redirect("/")
  } catch (error) {
     res.status(400).send(error.message);
  }
});
module.exports = router;

//intoduce express
const express = require("express");
//access router function in express
const router = express.Router();
//introducing the model.
const dollModel = require("../models/DollsModel");
//create the router
router.get("/Doll", (req, res) => {
  res.render("dolls"); //render a file
});

//posting route
router.post("/Doll", async (req, res) => {
  try {
    const contact = new dollModel(req.body);
    await contact.save();
    console.log(req.body);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

//fetching All Dolls from database
// router.get("/dollList", async (req, res) => {
//     try {
//       let dolls = await dollModel.find().sort({ $natural: -1 }); //from line8
//       res.render("DollTable", { dolls: dolls }); // to display sitters from data base
//       console.log("display dolls", dolls);
//     } catch (error) {
//       res.status(400).send("unable to find babies from database!");
//       console.log("unable to find babies from database!...", error);
//     }
//   });
  
//   //delete route for each  sitter form in database
//   router.post("/deleteDoll", async (req, res) => {
//     try {
//       await dollModel.deleteOne({ _id: req.body.id });
//       res.redirect("back");
//     } catch (error) {
//       res.status(400).send("unable to delete sitter from db!");
//       console.log("error deleting sitter...", error);
//     }
// });

// exportation (always the last line)
module.exports = router;  
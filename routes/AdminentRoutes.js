const express = require("express");
const router = express.Router();
const passport = require("passport");
// Import model
const Adminenter = require("./../models/Adminenter");

// Route for rendering the registration form
router.get("/register", (req, res) => {
  res.render("adminreg");
});

// Route for handling registration form submission
router.post("/register", async (req, res) => {
  try {
    const adminRegister = new Adminenter(req.body);
    await Adminenter.register(adminRegister, req.body.password, (err) => {
      if (err) {
        throw err;
      }
      res.redirect("/");
    });
  } catch (error) {
    res.status(400).send ("User not registered");
    console.log(error);
  }
});

// Route for rendering the login form
router.get("/login", (req, res) => {
  res.render("firstpage");
});

// Route for handling login form submission
// router.post(
//   "/login",
//   passport.authenticate("local", { failureRedirect: "/login" }),
//   (req, res) => {
//     res.redirect("/Admin");
//   }
// );

// Route for handling login form submission
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true, // Optional: enable flash messages
  }),
  (req, res) => {
    res.redirect("/Admin");
  }
);

//route to register present sitter form in database
router.get("", async (req, res) => {
  try {
    const sitter = await sitterModel.findOne({ _id: req.params.id });
    res.render("PresentSitterform", { sitter: sitter });
  } catch (error) {
    console.log("error finding a Sitter!", error);
    res.status(400).send("unable to find Sitter from the db!");
  }
});
//
router.post("/sitterCheckIn", async (req, res) => {
  try {
    await sitterModel.findOneAndUpdate({ _id: req.query.id }, req.body); // {avaible: true}
    console.log(req.body);
    res.redirect("/SittersCheckedInList"); // redirects to the checkedIn Table
  } catch (error) {
    res.status(404).send("unable to update Sitter in the db!");
    console.log("........................", error);
  }
});

//fetching list sitters Who checkedIn from database
router.get("/SittersCheckedInList", async (req, res) => {
  try {
    let sitters = await sitterModel.find({ status: "CheckedIn" });
    res.render("presentTable", {
      //render Table of CheckedIn
      sitters: sitters,
    }); // to display sitters from data base
    console.log("display sitter CheckdIn", sitters);
  } catch (error) {
    res.status(400).send("unable to find sitters from database!");
    console.log("unable to find sitters from database!...", error);
  }
});

module.exports = router;

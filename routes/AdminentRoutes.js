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
      res.redirect("/login");
    });
  } catch (error) {
    res.status(400).send("User not registered");
    console.error(error);
  }
});

// Route for rendering the login form
router.get("/login", (req, res) => {
  res.render("firstpage");
});

// Route for handling login form submission
router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("/Admin");
  }
);

module.exports = router;

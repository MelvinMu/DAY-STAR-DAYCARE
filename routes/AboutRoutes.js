const express = require("express");
const router = express.Router();

router.get("/about", (req, res) => {
  res.render("about");
});

router.post("/about", (req, res) => {
  res.render("about");
});

module.exports = router;

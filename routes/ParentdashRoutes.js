const express = require("express");
const router = express.Router();

router.get("/Parentdash", (req, res) => {
  res.render("Parentdashboard");
});

router.post("/Parentdash", (req, res) => {
  res.render("Parentdashboard");
});

module.exports = router;

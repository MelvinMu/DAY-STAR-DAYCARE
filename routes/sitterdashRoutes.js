const express = require("express");
const router = express.Router();

router.get("/sitterdash", (req, res) => {
  res.render("sitter_Dashboard");
});

router.post("/sitterdash", (req, res) => {
  res.render("sitter_Dashboard");
});

module.exports = router;

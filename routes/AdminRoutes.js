const express = require("express");
const router = express.Router();

router.get("/Admin", (req, res) => {
  res.render("Admin_page");
});

router.post("/Admin", (req, res) => {
  res.render("Admin_page");
});

module.exports = router;

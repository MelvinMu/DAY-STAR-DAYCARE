const express = require("express");
const router = express.Router();

//import model
const Pay = require("../models/sitterpayment");

router.get("/Payment", (req, res) => {
  res.render("sitterpay");
});

router.post("/Payment", async (req, res) => {
  try {
    const { sitterName, amount, telephone, date } = req.body;
    if (!sitterName || !amount || !telephone || !date) {
      res.status(400);
      throw new Error("Please fill all required fields");
    }
    const newPay = await Pay.create({
      sitterName: sitterName,
      amount: amount,
      telephone: telephone,
      date: date,
    });
    if (!newPay) {
      res.status(400);
      throw new Error("Payment not registered");
    }
    res.redirect("/Admin");
  } catch (error) {
    res.status(400).send(error.message);
  }
});
module.exports = router;

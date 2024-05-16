const express = require("express");
const router = express.Router();

//import model
const Procure = require("../models/Procurem");

router.get("/Procure", (req, res) => {
  res.render("Procurement");
});

router.post("/Procure", async (req, res) => {
  try {
    const { itemName, quantity, unitPrice } = req.body;
    if (!itemName || !quantity || !unitPrice) {
      res.status(400);
      throw new Error("Please fill all required fields");
    }
    const newProcure = await Procure.create({
      itemName: itemName,
      quantity: quantity,
      unitPrice: unitPrice,
    });
    if (!newProcure) {
      res.status(400);
      throw new Error("Payment not registered");
    }
    res.redirect("/");
  } catch (error) {
    res.status(400).send(error.message);
  }
});
module.exports = router;

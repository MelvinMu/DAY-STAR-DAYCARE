// const express = require("express");
// const router = express.Router();

// //import model
// const Data = require("../models/Datatracker");

// router.get("/data", (req, res) => {
//   res.render("Datatracker");
// });

// router.post("/data", async (req, res) => {
//   try {
//     const { babyName, babyHealth, babyMilestones, recommendation } = req.body;
//     if (!babyName || !babyHealth || !babyMilestones || !recommendation) {
//       res.status(400);
//       throw new Error("Please fill all required fields");
//     }
//     const newData = await Data.create({
//       babyName: babyName,
//       babyHealth: babyHealth,
//       babyMilestones: babyMilestones,
//       recommendation: recommendation,
//     });
//     if (!newData) {
//       res.status(400);
//       throw new Error("Data not acquired");
//     };
//     res.redirect("/");
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// });
// module.exports = router;

const express = require("express");
const router = express.Router();

// Import model
const Data = require("../models/Datatracker");

// GET route to render form
router.get("/data", (req, res) => {
  res.render("Datatracks");
});

// POST route to handle form submission
router.post("/data", async (req, res) => {
  try {
    const { babyName, babyHealth, babyMilestones, recommendation } = req.body;

    // Check if all required fields are present
    if (!babyName || !babyHealth || !babyMilestones || !recommendation) {
      res.status(400);
      throw new Error("Please fill all required fields");
    }

    // Create new data entry
    const newData = await Data.create({
      babyName,
      babyHealth,
      babyMilestones,
      recommendation,
    });

    // Check if data creation was successful
    if (!newData) {
      res.status(400);
      throw new Error("Failed to create data entry");
    }

    // Redirect to homepage or another appropriate route
    res.redirect("/"); // Change the URL as needed
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(400).send("An error occurred. Please try again later.");
  }
});

module.exports = router;

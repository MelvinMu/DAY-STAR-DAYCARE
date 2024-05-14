// const express = require("express");
// const router = express.Router();

// //import model
// const babyregister = require("../models/babyregister");

// router.get("/babyregister", (req, res) => {
//   res.render("Registration");
// });

// router.post("/babyregister", async (req, res) => {
//   try {
//     const register = new babyregisteration(req.body);
//     await babyregisteration.register(register, req.body.password, (err) => {
//       if (err) {
//         throw err;
//       }
//       res.redirect("/");
//     });
//   } catch (error) {
//     res.status(400).send("Failed to register");
//     console.log(error);
//   }
// });
// module.exports = router;

const express = require("express");
const router = express.Router();

//import model
const Baby = require("../models/babyregister")

router.get("/babyregister", (req, res) => {
  res.render("Registration");
});

router.post("/babyregister", async (req, res) => {
  try {
    const {
      babyName,
      babyGender,
      babyAge,
      location,
      personBrought,
      parentName,
      fee,
      periodOfStay,
      babyNumber,
    } = req.body;
    if (
      !babyName ||
      !babyGender ||
      !babyAge ||
      !location ||
      !personBrought||
      !parentName||
      !fee||
      !periodOfStay||
      !babyNumber
    ) {
      res.status(400);
      throw new Error("Please fill all required fields");
    }
    const newBaby = await Baby.create({
      babyName:babyName,
      babyGender:babyGender,
      babyAge:babyAge,
      location:location,
      personBrought:personBrought,
      parentName:parentName,
      fee:fee,
      periodOfStay:periodOfStay,
      babyNumber:babyNumber,
        });
    if (!newBaby){
      res.status(400)
      throw new Error("Baby not registered")
    }
    res.redirect("/babylist")
  } catch (error) {
     res.status(400).send(error.message);
  }
});

router.get("/babylist",   async (req, res)=> {
  try {
    let babies = await Baby.find();   //from line8
    res.render("babylist", {babies:babies}) // to display babies from data base
    console.log("display babies", babies);

  } catch (error) {
     res.status(400).send("unable to find babies from database!");
     console.log("unable to find babies from database!...", error );
  }
  })

//updating a baby in the database
router.get("/babyupdate/:id",   async(req, res)=> { //babiesUpdate can be any
  try{
    const babyUpdate = await Baby.findOne({_id: req.params.id});
    res.render("babyupdate", {baby:babyUpdate});

  } catch(error){
     console.log("error finding a baby!", error);
     res.status(400).send("unable to find baby from the db!");  
  }
})

router.post("/babyupdate", async(req, res)=> {
  try {
     await Baby.findByIdAndUpdate({_id: req.query.id}, req.body);
     res.redirect("/babylist");

  } catch (error) {
     res.status(404).send("unable to update baby in the db!");  
  }
})

module.exports = router;

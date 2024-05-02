//Dependencies
const express = require("express"); //for posting
const mongoose = require("mongoose"); //for mongodb
const path = require("path"); //for pug
const passport = require("passport");
const expressSession = require("express-session")({
  secret: "secret",
  resave: false,
  saveunintialised: false,
});

require("dotenv").config();

//import register model with username
const firstregister = require("./models/firstregister");
// const form = require("./models/form");
const sitterregister = require("./models/sitterregistration");

const parentRoutes = require("./routes/ParentRoutes");
const firstregisterRoutes = require("./routes/firstRoutes");
const formRoutes = require("./routes/formRoutes");
const sitterRoutes = require("./routes/sitterRoutes");
const indexRoutes = require("./routes/indexRoutes")
const AboutRoutes = require("./routes/AboutRoutes");
const ParentfeedRoutes = require("./routes/ParentfeedRoutes");
const DatatrackerRoutes = require("./routes/DatatrackerRoutes");


//Instantiations
const app = express();

//configuration
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", (err) => {
    console.error(`Connection error: ${err.message}`);
  });

//

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views")); //specify the directory where the views are found

//Middleware
app.use(express.static(path.join(__dirname, "public"))); //set directory for static files
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Express session configuration
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

//passport configs
passport.use(firstregister.createStrategy());
passport.serializeUser(firstregister.serializeUser()); //ways of tracking user usage
passport.deserializeUser(firstregister.deserializeUser());

//use imported routes

app.use("/", parentRoutes);

app.use("/", formRoutes);

app.use("/", firstregisterRoutes);

app.use("/", sitterRoutes);

app.use("/", indexRoutes);

app.use("/", AboutRoutes);

app.use("/", ParentfeedRoutes);

app.use("/", DatatrackerRoutes);

// app.get("/Admin", (req, res) => {
//   res.render("Admin");
// });

// app.get("/", (req, res) => {
// res.send("Homepage! Hello world.");
// });

// app.get("/about", (req, res) => {
// res.send("About page. Nice.");
// });

// //syntax of a route
// // app.METHOD(PATH, HANDLER);

// app.get("/course", (req, res) => {
// res.send("You have hit the courses page");
// });

// app.get('/books/:bookId', (req, res) => {
// res.send(req.params.bookId);
// console.log(req.params.bookId)
// });

// app.get('/students/:name', (req, res) => {
// res.send( "This is my students name " + req.params.name);
// });

// app.get("/students/:studentId", (req, res) => {
// res.send("xx " + req.params.studentId);
// console.log("studentId " + req.params);
// });

// //querry params
// app.get("/students", (req, res) => {
// res.send("This is class " + req.query.class + "Cohort " + req.query.cohort);
// });

// app.get("/babies", (req, res) => {
// res.send("This is a baby " + req.query.name + "age " + req.query.age);
// });

// app.get("/index", (req, res) => {
// res.sendFile(__dirname + "/index.html");
// });

// app.get("/registerbaby", (req, res) => {
//   res.sendFile(__dirname + "/register_baby.html");
// });

// app.post("/registerbaby", (req, res) => {
//   console.log(req.body)
//   let baby=req.body
// res.redirect("/index")
//   res.json({message:"baby registered",baby})
// })

// app.get("/landing page", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

//For invalid routes
// app.get("*", (req, res) => {
//   res.send("404! This is an invalid URL.");
// });

//Bootstraping the server
//Always the last line in code
app.listen(3500, () => console.log("listening on port 3500"));

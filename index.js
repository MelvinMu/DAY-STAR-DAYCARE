// dependency
const express = require('express'); // for posting
const mongoose = require('mongoose'); // for mongodb
const path = require('path'); //for pug
const passport = require('passport'); //for passport
const moment = require('moment'); //for moment
const expressSession = require('express-session')({ // for express-session
  secret:"secret",
  resave: false,
  saveUninitialized: false
});
require("dotenv").config();
const Adminenter = require("./models/Adminenter");


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

//Middleware
app.use(express.static(path.join(__dirname, "public"))); //set directory for static files
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views")); //specify the directory where the views are found


//Express session configuration
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

//import register model with username

// const form = require("./models/form");

//passport configs
passport.use(Adminenter.createStrategy());
passport.serializeUser(Adminenter.serializeUser()); //ways of tracking user usage
passport.deserializeUser(Adminenter.deserializeUser());

const parentRoutes = require("./routes/ParentRoutes");
const firstregisterRoutes = require("./routes/firstRoutes");

const sitterRoutes = require("./routes/sitterRoutes");
const indexRoutes = require("./routes/indexRoutes");
const AboutRoutes = require("./routes/AboutRoutes");
const ParentfeedRoutes = require("./routes/ParentfeedRoutes");
const DatatrackerRoutes = require("./routes/DatatrackerRoutes");
const registerbabyRoutes = require("./routes/registerbabyRoutes");
const AdminRoutes = require("./routes/AdminRoutes");
const ParentdashRoutes = require("./routes/ParentdashRoutes");
const sitterdashRoutes = require("./routes/sitterdashRoutes");
const BabymileRoutes = require("./routes/BabymileRoutes");
const SitterpayRoutes = require("./routes/SitterpayRoutes");
const AdminentRoutes = require("./routes/AdminentRoutes");
const ProcurementRoutes = require("./routes/ProcurementRoutes");
//use imported routes

app.use("/", parentRoutes);

app.use("/", firstregisterRoutes);

app.use("/", sitterRoutes);

app.use("/", indexRoutes);

app.use("/", AboutRoutes);

app.use("/", ParentfeedRoutes);

app.use("/", DatatrackerRoutes);

app.use("/", registerbabyRoutes);

app.use("/", AdminRoutes);

app.use("/", ParentdashRoutes);

app.use("/", sitterdashRoutes);

app.use("/", BabymileRoutes);

app.use("/", SitterpayRoutes);

app.use("/", AdminentRoutes);

app.use=("/", ProcurementRoutes)

//For invalid routes
// app.get("*", (req, res) => {
//   res.send("404! This is an invalid URL.");
// });

//Bootstraping the server
//Always the last line in code
app.listen(3500, () => console.log("listening on port 3500"));

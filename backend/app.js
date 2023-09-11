const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");

const errorMiddleware = require("./middleware/error");

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
  console.log('production');
}else{
  console.log('unproduction');
  require("dotenv").config()
}

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

// Route Imports
const product = require("./routes/productRoute");
const Blog = require("./routes/blogRoutes");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");
const caireer =require ('./routes/caireerRoute')

app.use("/api/v1", product);
app.use("/api/v1", Blog);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);
app.use("/api/v1", caireer);

app.use(express.static(path.join(__dirname, "../clints/build")));
// Home page  for noraml acsess user end
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../clints/build/index.html"));
});
app.use(express.static(path.join(__dirname, "../admin/build")));

// admin panle  for admin acsess 
app.get("/admin", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../admin/build/index.html"));
});

// patner panle  for patner acsess 
app.use(express.static(path.join(__dirname, "../patner/build")));

app.get("/patner", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../patner/build/index.html"));
});


// Middleware for Errors
app.use(errorMiddleware);

// for 404 routes  Errors  and retrun normal pages for show 404 page
app.use(function(req, res) {
  res.status(404).sendFile(path.resolve(__dirname, "../clints/build/index.html"));
});

module.exports = app;

const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

//Regular Middlware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//import All Routes
const product = require("./routes/product");

//router middleware
app.use("/api/v1", product);

app.get("/", (req, res) => {
  res.send("Working");
});

module.exports = app;

require("dotenv").config();
const express = require("express");
const router = require("./network/routes");
const db = require("./db");

// Start app server
var app = express();
app.use(express.json());

// connect db
const uri =
  "mongodb+srv://" +
  process.env.DB_USER +
  ":" +
  process.env.DB_PASS +
  process.env.DB_HOST +
  "platzi-course";

db.connectDB(uri);

// use router
router(app);

// Public folder
app.use(express.static("public"));

// open port
app.listen(3000);
console.log("Listening on port 3000");

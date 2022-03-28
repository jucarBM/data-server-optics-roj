require("dotenv").config();
const express = require("express");
const router = require("./network/routes");

// Start app server
var app = express();
app.use(express.json());

// use router
router(app);

// Public folder
app.use(express.static("public"));

// open port
app.listen(3000);
console.log("Listening on port 3000");

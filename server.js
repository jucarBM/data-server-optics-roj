require("dotenv").config();
const express = require("express");
var app = express();
const server = require("http").Server(app);

const router = require("./network/routes");
const db = require("./db");
const socket = require("./socket");

// Start app server
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
socket.connect(server);

// Public folder
app.use(express.static("public"));

// open port
server.listen(3000, () => {
  console.log("Listening on port 3000");
});

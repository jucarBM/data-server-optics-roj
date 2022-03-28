const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
  inst: String,
  message: {
    type: String,
    required: true,
  },
  type: String,
  date: Date,
  extra: String,
});

const model = mongoose.model("Reports", mySchema);
module.exports = model;

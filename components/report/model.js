const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
  inst: {
    type: Schema.ObjectId,
    ref: "Instruments",
  },
  message: {
    type: String,
    required: true,
  },
  type: String,
  date: Date,
});

const model = mongoose.model("Reports", mySchema);
module.exports = model;

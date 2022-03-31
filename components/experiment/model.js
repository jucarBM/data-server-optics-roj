const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
  inst: {
    type: Schema.ObjectId,
    ref: "Instruments",
  },
  date: Date,
  samples: {
    type: new mongoose.Schema({
      type: String,
      path: String,
      file: String,
    }),
    required: false,
  },
});

const model = mongoose.model("Experiments", mySchema);
module.exports = model;

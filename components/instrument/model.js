const monngose = require("mongoose");

const Schema = monngose.Schema;

const mySchema = new Schema({
  name: String,
  station: String,
  type: String,
  description: String,
  location: [
    {
      x: String,
      y: String,
    },
  ],
});

const model = monngose.model("Instruments", mySchema);
module.exports = model;

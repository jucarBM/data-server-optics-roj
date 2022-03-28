const db = require("mongoose");
const Model = require("./model");

const uri =
  "mongodb+srv://" +
  process.env.DB_USER +
  ":" +
  process.env.DB_PASS +
  process.env.DB_HOST +
  "platzi-course";

db.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.error("[ERROR]: " + err);
  });

const list = [];

function addReport(report) {
  try {
    const newReport = new Model(report);
    newReport.save();
  } catch (err) {
    console.error("[ERROR]: " + err);
  }
}

async function listReports() {
  // return list;
  const reports = await db.model("Reports").find();
  return reports;
}

module.exports = {
  add: addReport,
  list: listReports,
  // get
  // update
  // delete
};

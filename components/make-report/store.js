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

async function addReport(report) {
  try {
    const newReport = new Model(report);
    await newReport.save();
  } catch (err) {
    console.error("[ERROR]: " + err);
  }
}

async function listReports(filterReports) {
  let filter = {};
  if (filterReports !== null) {
    filter = { inst: filterReports };
  }
  const reports = await db.model("Reports").find(filter);
  return reports;
}

async function updateMessage(id, message) {
  //
  const foundReport = await db.model("Reports").findOne({ _id: id });
  foundReport.message = message;
  foundReport.save();
  return foundReport;
}

async function deleteReport(id) {
  try {
    const foundReport = await db.model("Reports").findOne({ _id: id });
    if (foundReport) {
      foundReport.remove();
      return foundReport;
    } else return false;
  } catch (err) {
    console.error("[ERROR]: " + err);
  }
}

module.exports = {
  add: addReport,
  list: listReports,
  updateMessage: updateMessage,
  delete: deleteReport,
};

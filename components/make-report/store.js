const Model = require("./model");

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
  const reports = await Model.find(filter);
  return reports;
}

async function updateMessage(id, message) {
  //
  const foundReport = await Model.findOne({ _id: id });
  foundReport.message = message;
  foundReport.save();
  return foundReport;
}

async function deleteReport(id) {
  try {
    const foundReport = await Model.findOne({ _id: id });
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

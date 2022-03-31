const Model = require("./model");

async function addReport(report) {
  try {
    const newReport = new Model(report);
    await newReport.save();
  } catch (err) {
    console.error("[ERROR]: " + err);
  }
}

function listReports(filterReports) {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (filterReports !== null) {
      filter = { inst: filterReports };
    }
    const reports = Model.find(filter)
      .populate("inst", { _id: 0, name: 1, station: 1 })
      .exec((err, populated) => {
        if (err) {
          reject(err);
          return false;
        }
        resolve(populated);
      });
  });
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

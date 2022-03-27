const list = [];

function addReport(report) {
  list.push(report);
}

function listReports() {
  return list;
}

module.exports = {
  add: addReport,
  list: listReports,
  // get
  // update
  // delete
};

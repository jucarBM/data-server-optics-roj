const report = require("../components/report/network");
const experiment = require("../components/experiment/network");
const instrument = require("../components/instrument/network");

const routes = function (server) {
  server.use("/report", report);
  server.use("/experiment", experiment);
  server.use("/instrument", instrument);
};

module.exports = routes;

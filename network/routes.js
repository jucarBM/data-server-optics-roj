const report = require("../components/report/network");
const experiment = require("../components/experiment/network");

const routes = function (server) {
  server.use("/report", report);
  server.use("/experiment", experiment);
};

module.exports = routes;

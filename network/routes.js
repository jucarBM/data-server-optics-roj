const express = require("express");
const make_report = require("../components/make-report/network");

const routes = function (server) {
  server.use("/make-report", make_report);
};

module.exports = routes;

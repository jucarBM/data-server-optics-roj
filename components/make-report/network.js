const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");
router = express.Router();

router.get("/", function (req, res) {
  controller
    .getReports()
    .then((reportList) => {
      response.success(req, res, reportList, 200);
    })
    .catch((err) => {
      response.error(req, res, "Error obteniendo los reportes", 500, err);
    });
});

router.post("/", function (req, res) {
  controller
    .makeReport(req.body)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch((err) => {
      response.error(req, res, "Informacion invalida.", 400, err);
    });
});

module.exports = router;

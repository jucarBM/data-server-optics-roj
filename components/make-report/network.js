const { Router } = require("express");
const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");
router = express.Router();

router.get("/", function (req, res) {
  const filterReports = req.query.inst || null;
  controller
    .getReports(filterReports)
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

router.patch("/:id", function (req, res) {
  console.log(req.params.id);
  controller
    .updateReport(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((err) => {
      response.error(req, res, "Error actualizando el reporte", 500, err);
    });
  //
});

router.delete("/:id", function (req, res) {
  controller
    .deleteReport(req.params.id)
    .then(() => {
      response.success(req, res, `Usuario ${req.params.id} eliminado.`, 200);
    })
    .catch((err) => {
      response.error(req, res, "id invalido", 500, err);
    });
});

module.exports = router;

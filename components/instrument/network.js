const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");
router = express.Router();

router.post("/", function (req, res) {
  controller
    .createInstrument(req.body)
    .then((fullInst) => {
      response.success(req, res, fullInst, 201);
    })
    .catch((err) => {
      response.error(req, res, "Informacion invalida.", 400, err);
    });
});

router.get("/", function (req, res) {
  controller
    .listInstrument()
    .then((fullInst) => {
      response.success(req, res, fullInst, 200);
    })
    .catch((err) => {
      response.error(req, res, "Error obteniendo instrumentos", 400, err);
    });
});

module.exports = router;

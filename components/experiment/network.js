const express = require("express");
const multer = require("multer");

const response = require("../../network/response");
const controller = require("./controller");
router = express.Router();

const upload = multer({
  dest: "uploads/",
});

router.post("/sample", upload.single("file"), function (req, res) {
  // TO-DO: Implementar el upload de samples para experimentos
});

router.post("/", function (req, res) {
  controller
    .addExperiment(req.body)
    .then((fullExperiment) => {
      response.success(req, res, fullExperiment, 201);
    })
    .catch((err) => {
      response.error(req, res, "Informacion invalida.", 400, err);
    });
});

router.get("/", function (req, res) {
  controller
    .listExperiments()
    .then((fullExperiments) => {
      response.success(req, res, fullExperiments, 200);
    })
    .catch((err) => {
      response.error(req, res, "Informacion invalida.", 400, err);
    });
});

module.exports = router;

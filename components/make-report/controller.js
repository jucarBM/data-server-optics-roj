const store = require("./store");

function makeReport(body) {
  return new Promise((resolve, reject) => {
    if (!body.inst || !body.message || !body.type) {
      return reject("No se pudo crear el reporte, los datos estan incompletos");
    }
    const fullMessage = {
      inst: body.inst,
      message: body.message,
      type: body.type,
      extra: body.extra,
      date: new Date(),
    };

    store.add(fullMessage);
    resolve(fullMessage);
  });
}

function getReports() {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  });
}

module.exports = {
  makeReport,
  getReports,
};

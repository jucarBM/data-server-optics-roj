const store = require("./store");

function makeReport(inst, message, type) {
  return new Promise((resolve, reject) => {
    if (!inst || !message || !type) {
      return reject("No se pudo crear el reporte, los datos estan incompletos");
    }
    const fullMessage = {
      inst: inst,
      message: message,
      type: type,
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

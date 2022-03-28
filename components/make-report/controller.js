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

function getReports(filterReports) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterReports));
  });
}

function updateReport(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      return reject(
        "No se pudo actualizar el reporte, los datos estan incompletos"
      );
    }
    const result = await store.updateMessage(id, message);
    resolve(result);
  });
}

function deleteReport(id) {
  return new Promise(async (resolve, reject) => {
    if (!id) {
      return reject("No se pudo eliminar el reporte, no id especificado");
    }
    result = await store.delete(id);
    console.log(result);
    if (result) {
      resolve(result);
    } else {
      reject("No se pudo eliminar el reporte, id invalido o no encontrado");
    }
  });
}

module.exports = {
  makeReport,
  getReports,
  updateReport,
  deleteReport,
};

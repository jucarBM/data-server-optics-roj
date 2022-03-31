const store = require("./store");

function createInstrument(inst) {
  return new Promise((resolve, reject) => {
    if (!inst.name) {
      reject("No se pudo crear el instrumento, los datos estan incompletos");
    }
    const fullInst = {
      name: inst.name,
      station: inst.station || "",
      type: inst.type || "",
      description: inst.description || "",
      location: inst.location || "",
    };
    store.create(fullInst);
    resolve(fullInst);
  });
}

function listInstrument() {
  return new Promise((resolve, reject) => {
    const allInst = store.list();
    resolve(allInst);
  });
}

module.exports = {
  createInstrument,
  listInstrument,
};

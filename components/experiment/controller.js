const { socket } = require("../../socket");
const store = require("./store");

function addExperiment(body) {
  return new Promise((resolve, reject) => {
    if (!body.name) {
      return reject(
        "No se pudo crear el experimento, los datos estan incompletos"
      );
    }
    const fullExperiment = {
      inst: body.inst,
      date: new Date(),
    };

    store.add(fullExperiment);

    socket.io.emit("message", fullExperiment);

    resolve(fullExperiment);
  });
}

function listExperiments(Experiment) {
  return new Promise((resolve, reject) => {
    resolve(store.list(Experiment));
  });
}

module.exports = {
  addExperiment,
  listExperiments,
};

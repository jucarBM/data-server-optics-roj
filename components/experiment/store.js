const Model = require("./model");

function addExperiment(experiment) {
  const newExperiment = new Model(experiment);
  newExperiment.save();
}

function listExperiments(experiment) {
  if (experiment !== null) {
    return Model.find({ experiment: experiment });
  } else {
    return Model.find();
  }
}

module.exports = {
  add: addExperiment,
  list: listExperiments,
};

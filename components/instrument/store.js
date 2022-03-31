const Model = require("./model");

function createInst(inst) {
  const newInst = new Model(inst);
  newInst.save();
}

async function listInst() {
  return await Model.find();
}

module.exports = {
  create: createInst,
  list: listInst,
};

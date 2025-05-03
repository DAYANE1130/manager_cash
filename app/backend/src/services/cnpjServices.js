const { Cnpj} = require('../models'); 

const getAll = async () => {
  const cnpjs = await Cnpj.findAll();
  return cnpjs;
};

module.exports = {
  getAll,
};

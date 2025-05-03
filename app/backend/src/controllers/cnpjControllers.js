const cnpjServices = require('../services/cnpjServices')

const getAll = async (req, res) => {
  const cnpjs = await cnpjServices.getAll();
  return res.status(200).json(cnpjs)
}

module.exports = { getAll }
const { Order, Buyer, Provider, Cnpj } = require('../models');

const getAllOrders = async () => {
  const orders = await Order.findAll({
    // método Eager Loading , faz o join e traz dados mais completos
    attributes: ['nNF', 'emissionDate', 'value', 'orderStatusBuyer'],

    include: [

      { model: Buyer, as: 'buyer', attributes: ['name'] },

      { model: Provider, as: 'provider', attributes: ['name', 'tradingName', 'email'] },

      { model: Cnpj, as: 'cnpj', attributes: ['cnpj'] },

    ],
  });
  return orders;
};

module.exports = {
  getAllOrders,
};

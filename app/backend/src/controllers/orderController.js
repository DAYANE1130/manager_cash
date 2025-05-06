const orderService = require('../services/orderService');

const getAllOrders = async (req, res, next) => {
  const orders = await orderService.getAllOrders();

  if (!orders) {
    return next({ status: 404, message: 'Erro ao buscar notas fiscais' });
  }
  return res.status(200).json(orders);
};

module.exports = { getAllOrders };
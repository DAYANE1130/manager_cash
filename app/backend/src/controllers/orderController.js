const orderService = require('../services/orderService');

const getAllOrders = async (req, res) => {
  const orders = await orderService.getAllOrders();
  return res.status(200).json(orders);
};

module.exports = { getAllOrders };
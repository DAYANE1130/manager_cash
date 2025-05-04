const route = require('express').Router();


const orderControllers = require('../controllers/orderController');

route.get('/orders', orderControllers.getAllOrders);

module.exports = route;
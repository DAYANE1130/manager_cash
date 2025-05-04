const route = require('express').Router();

const cnpjControllers = require('../controllers/cnpjControllers');

route.get('/cnpj', cnpjControllers.getAll);

module.exports = route;
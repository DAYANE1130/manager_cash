const express = require('express');
//require('express-async-errors');
const routes = require('./routes/index');


const app = express();
app.use(express.json());

app.use('/', routes.cnpjRouter);



//app.use(errorMiddleware.errorHandler);

module.exports = app;
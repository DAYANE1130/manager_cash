const express = require('express');
// require('express-async-errors');
const routes = require('./routes/index');
const cors = require('cors');
const corsConfig = require('./corsConfig')

const app = express();
app.use(express.json());
app.use(cors(corsConfig));

app.use('/', routes.cnpjRouter);
app.use('/', routes.orderRouter);

// app.use(errorMiddleware.errorHandler);

module.exports = app;
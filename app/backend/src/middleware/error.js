require('express-async-errors');

const errorHandler = (err, _req, res, _next) => {
  const status = err.status || 500;
  const message = err.message || 'Erro inesperado, tente mais tarde';
  return res.status(status).json({ message });
};

module.exports = errorHandler;

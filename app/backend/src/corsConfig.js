const corsConfig = {
  origin:true,
  methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: [],
  credentials:true,
  maxAge: 90,
};

module.exports = corsConfig;
const DB_CONFIG = {
  DB_HOST: 'ozi-db1.c306iyoqqj8p.ap-south-1.rds.amazonaws.com',
  DB_NAME: 'shop_ozi_form_data',
  DB_PASSWORD: 'rLfcu9Y80S8X',
  DB_PORT: 3306,
  DB_USER: 'admin'
};

const SERVER_CONFIG = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development'
};

const API_ENDPOINTS = {
  SUBMIT_FORM: '/submit-form'
};

module.exports = {
  DB_CONFIG,
  SERVER_CONFIG,
  API_ENDPOINTS
};

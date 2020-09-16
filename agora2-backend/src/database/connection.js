const { Sequelize } = require('sequelize');

// Example for postgres
const sequelize = new Sequelize('ddbbagora2', 'awuser', 'awpass', {
    host: '127.0.0.1',
    dialect: 'mysql'
  });

module.exports = sequelize;
global.sequelize = sequelize;

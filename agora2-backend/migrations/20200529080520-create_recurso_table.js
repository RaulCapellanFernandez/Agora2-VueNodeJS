'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("recursos",{
    id: {
        type: Sequelize.INTEGER(100),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    url: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
    },
    nombre:{
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
    },
     //Foregein key para profesores
    asignaturaId: Sequelize.INTEGER(11),
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    })

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("recursos");
  }
};
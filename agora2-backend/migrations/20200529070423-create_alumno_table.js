'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("alumnos",{
    dni: {
        type: Sequelize.STRING(9),
        allowNull: false,
        primaryKey: true,
    },
    username: {
        type: Sequelize.STRING(11),
        allowNull: false,
        unique: true,
    },
    password:{
        type: Sequelize.STRING(20),
        allowNull: false
    },
    email:{
        type: Sequelize.STRING(30),
        allowNull: true,
        unique: true
    },
    profesor:{
        type: Sequelize.BOOLEAN(),
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    })

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("alumnos");
  }
};

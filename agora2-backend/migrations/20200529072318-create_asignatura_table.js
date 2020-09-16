'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("asignaturas",{
    id: {
        type: Sequelize.INTEGER(100),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: Sequelize.STRING(60),
        allowNull: false,
        unique: true,
    },
    carrera:{
        type: Sequelize.STRING(20),
        allowNull: true
    },
    creditos:{
        type: Sequelize.INTEGER(20),
        allowNull: true
    },
     //Foregein key para profesores
    alumnoId: Sequelize.STRING(9),
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    })

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("asignaturas");
  }
};
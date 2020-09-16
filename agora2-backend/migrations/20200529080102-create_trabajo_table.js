'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("trabajos",{
    id: {
      type: Sequelize.INTEGER(100),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
    },
    examen:{
        type: Sequelize.BOOLEAN()
    },
    fechaentrega:{
        type: Sequelize.DATEONLY(), 
        allowNull: true
    },
     //Foregein key para profesores
    asignaturaId: Sequelize.INTEGER(100),
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("trabajos");
  }
};
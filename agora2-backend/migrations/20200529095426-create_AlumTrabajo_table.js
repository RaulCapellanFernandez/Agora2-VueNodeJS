'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("alumtrabajos",{
    id: {
        type: Sequelize.INTEGER(100),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    nota: {
      type: Sequelize.INTEGER(10),
      allowNull: true,
    },
    url: {
      type: Sequelize.STRING(100),
      allowNull: true,
    },
    entregado: {
      type: Sequelize.BOOLEAN(),
      allowNull: true,
    },
     //Foregein key para examenes y alumnos
    trabajoId: Sequelize.INTEGER(11),
    alumId: Sequelize.STRING(9),
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    })

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("alumtrabajos");
  }
};

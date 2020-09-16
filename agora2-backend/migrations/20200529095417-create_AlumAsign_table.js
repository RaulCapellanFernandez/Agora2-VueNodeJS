'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("alumasigns",{
    id: {
        type: Sequelize.INTEGER(100),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
     //Foregein key para asignaturas y alumnos
    asignId: Sequelize.INTEGER(11),
    alumId: Sequelize.STRING(9),
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    })

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("alumasigns");
  }
};

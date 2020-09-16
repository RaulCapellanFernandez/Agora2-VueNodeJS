const Sequelize = require("sequelize");

module.exports = sequelize.define("alumtrabajo", {
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
});

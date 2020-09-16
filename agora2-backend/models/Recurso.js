const Sequelize = require("sequelize");

module.exports = sequelize.define("recurso", {
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
});

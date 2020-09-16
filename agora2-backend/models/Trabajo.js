const Sequelize = require("sequelize");

module.exports = sequelize.define("trabajo", {
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
        type: Sequelize.BOOLEAN(),
        allowNull: false
    },
    fechaentrega:{
        type: Sequelize.DATEONLY(), 
        allowNull: true
    },
});

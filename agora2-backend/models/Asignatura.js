const Sequelize = require("sequelize");

module.exports = sequelize.define("asignatura", {
    id: {
        type: Sequelize.INTEGER(100),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: Sequelize.STRING(11),
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
});

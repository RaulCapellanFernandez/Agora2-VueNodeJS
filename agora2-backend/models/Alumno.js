const Sequelize = require("sequelize");

module.exports = sequelize.define("alumno", {

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
});

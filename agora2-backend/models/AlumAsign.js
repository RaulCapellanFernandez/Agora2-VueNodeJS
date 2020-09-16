const Sequelize = require("sequelize");

module.exports = sequelize.define("alumasign", {
    id: {
        type: Sequelize.INTEGER(100),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
});

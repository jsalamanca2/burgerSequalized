var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

// Creates a Table for the database
var Burger = sequelize.define("burgers", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  burger_name: {
    type: Sequelize.STRING,
    allowNull:false,
    validate: {
      len:[2]
    }
  },
  devoured: {
    type: Sequelize.BOOLEAN,
    defaultValue: 0
  }
});

// Syncs with DB
Burger.sync();

module.exports = Burger;
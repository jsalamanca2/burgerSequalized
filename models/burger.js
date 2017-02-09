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
    type: Sequelize.STRING
  },
  devoured: {
    type: Sequelize.BOOLEAN,
    defaultValue: 0
  },
  created_at: {
    type: Sequelize.DATE
  }
}, {
  timestamps: false
});

// Syncs with DB
Burger.sync();

module.exports = Burger;
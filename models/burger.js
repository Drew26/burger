
// Sequelize capital for the standard library.
var Sequelize = require("sequelize");
// sequelize lower case for the connection to DB.
var sequelize = require("../config/connection");

module.exports = function(sequelize) {

  var Burger = sequelize.define('Burger', {
    burger_name: {
      type: Sequelize.STRING,
      allowNull: false 
    },
    devoured: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
  return Burger;

};
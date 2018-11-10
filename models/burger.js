// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm");

var Burger = {
  selectAll: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(burger, cb) {
    orm.insertOne(burger, function(res) {
      cb(res);
    });
  },
  updateOne: function(burger, cb) {
    orm.updateOne(burger, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = Burger;

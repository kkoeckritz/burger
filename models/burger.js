// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm");

var burger = {
  selectAll: function(cb) {
    orm.all("burgers", cb);
  },
  // The variables cols and vals are arrays.
  insertOne: function(burger, cb) {
    console.log("burger name: " + burger);
    orm.create("burgers", ["burger_name"], [burger], cb);
  },
  updateOne: function(id, cb) {
    orm.update("burgers", {"devoured": true}, "id="+id, cb);
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;

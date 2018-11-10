// link required libs
var connection = require("./connection.js");

var table_name = "burgers";

var orm = {
  selectAll: function(callback) {
    var s = `SELECT * FROM ${table_name}`;

    connection.query(s, function(err, result) {
      callback(result);
    });
  },

  insertOne: function(burger, callback) {
    var s = `INSERT INTO ${table_name} (id, burger_name, devoured) VALUES (?,?,?)`;

    connection.query(s, [1, burger.name, 'FALSE'], function(
      err,
      result
    ) {
      callback(result);
    });
  },

  updateOne: function(burger, callback) {
    var s = `UPDATE ${table_name} SET devoured = TRUE WHERE burger_name=?`;

    connection.query(s, [burger.name], function(err, result) {
      callback(result);
    });
  }
};

module.exports = orm;

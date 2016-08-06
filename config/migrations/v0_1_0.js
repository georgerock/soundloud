var db = require ('../db');
var connection = db.connect();

var createTableUsers = function(callback) {
  var query = "CREATE TABLE Users (id int, fName varchar(255), lName varchar(255));";
  var values = [];
  var res = db.createQuery(query, values);
  callback(null, res);
}

var icallback = function (err, data) {
  if (err) {
    return "Error";
  }
  console.log(data);
}

createTableUsers(icallback);

var mysql        = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '3306',
  user     : 'root',
  password : 'verysecretpass123',
  database : 'soundloud'
});

module.exports = {

  connect: function () {
    connection.connect(function(err){
      if (err) {
        console.log("Something bad happened..." + err.stack);
        return;
      }
      console.log("Connected as id " + connection.threadId);
    });
  },

  close: function () {
    connection.end(function(err){
      if (err) {
        return "Could not close connction " + err;
      }
      return "Connection closed!";
    });
  },

  forceClose: function () {
    connection.destroy();
  },

  createQuery: function (query, values) {
    connection.query(query, values, function (error, results, fields) {
      if (error) {
        return "Something bad happened" + error;
      }
      var res = [results, fields];
      return res;
    });
  }
}

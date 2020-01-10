var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "root420",
  database: "burgerDB"
});

connection.connect(function(err) {
  if (err) {
      console.log("mysql connection is the issue!");
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
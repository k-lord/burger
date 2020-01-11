var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "m7nj9dclezfq7ax1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "qxfziplylw4yjnt7",
  password: "x9ub8e4djcu3ftpg",
  database: "b221eypynm4aa3h7"
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
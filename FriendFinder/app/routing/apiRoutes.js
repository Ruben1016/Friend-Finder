var mysql = require("mysql")

var connection;
if (process.env.JAWSDB_URL) {
connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "finder_db"
});
}

connection.connect(function(err) {
if (err) {
  console.error("error connecting: " + err.stack);
  //once successfully connected, you may want to query your database for the info you'll need later!
}
});

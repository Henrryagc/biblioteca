const mysql = require("mysql");
// Coloca aquí tus credenciales
module.exports = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "biblioteca"
});
console.log("hello from connection")
/*

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'ventas',
  password : ''
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});

connection.end();
*/

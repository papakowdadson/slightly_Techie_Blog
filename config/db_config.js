const mysql = require("mysql");
const dbConn = mysql.createConnection({
  host: process.env.HOST||"localhost",
  user: process.env.USER||"root",
  password: process.env.PASSWORD||"",
});

dbConn.connect((err) => {
  if (err) throw err;
  console.log("Connection successful");
});

let sql = "CREATE DATABASE IF NOT EXISTS blog_db";

dbConn.query(sql, (err, result) => {
  if (err) {
    throw err;
  } else {
    console.log("create db result", result);
  }
});
const useQuery = "USE blog_db";
const sqlQuery =
  "CREATE TABLE if NOT EXISTS blog(id INTEGER UNIQUE AUTO_INCREMENT NOT NULL,image VARCHAR(255) DEFAULT '',title VARCHAR(255) NOT NULL,content VARCHAR(255) NOT NULL,author VARCHAR(255) NOT NULL,createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,PRIMARY KEY(id))";

dbConn.query(useQuery, function (err, result) {
  if (err) {
    throw err;
  } else {
    console.log("using db", result);
  }
});

dbConn.query(sqlQuery, function (err, result) {
  if (err) {
    throw err;
  } else {
    console.log("create table result", result);
  }
});

module.exports = dbConn;

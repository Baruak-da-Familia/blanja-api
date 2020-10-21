require("dotenv").config();

const mySql = require("mysql");

const db = mySql.createConnection({
	host: process.env.HOST,
	user: process.env.DBUSER,
	database: process.env.DATABASE,
	password: process.env.PASSWORD,
	multipleStatements: true,
});

db.connect((err) => {
	if (err) throw err;
	console.log("Mysql Database Connected!");
});

module.exports = db;

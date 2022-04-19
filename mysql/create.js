const db = require('../config/db') 

let createQuery = `
CREATE TABLE IF NOT EXISTS user (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50) NULL DEFAULT NULL,
	Password VARCHAR(50) NULL DEFAULT NULL,
	Email VARCHAR(50) NULL DEFAULT NULL,
	Addres VARCHAR(50) NULL DEFAULT NULL,
	Joint_date VARCHAR(50) NULL DEFAULT NULL,
	createdAt DATETIME NULL DEFAULT CURRENT_TIMESTAMP(),
	updatedAt DATETIME NULL,
	PRIMARY KEY (id)
)
COLLATE='utf8mb4_general_ci'
;
`



db.query(createQuery, function (error, results, fields) {
    if (error) throw error;
    console.log('Table has been created');
});

let alterQuery = "ALTER TABLE `Admin` CHANGE COLUMN `Name` `Name` VARCHAR(100)";

db.query(alterQuery, function (error, results, fields) {
    if (error) throw error;
    console.log('Table has been altered ');
});
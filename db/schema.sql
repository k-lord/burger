CREATE DATABASE burgerDB;
USE burgerDB;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(300) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
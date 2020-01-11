USE b221eypynm4aa3h7;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(300) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
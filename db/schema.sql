DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	burger_name varchar(40) NOT NULL,
    devoured boolean default false
);
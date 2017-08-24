-- Just Dancing in the Database Database -- 

CREATE DATABASE burgers_db; 
USE burgers_db; 

CREATE TABLE burgers
(
id INT UNSIGNED NOT NULL AUTO_INCREMENT, 
burger_name VARCHAR (255),  
devoured BOOLEAN default false, 
`date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
PRIMARY KEY (id)
); 
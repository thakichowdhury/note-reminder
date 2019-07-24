CREATE DATABASE quote_remind;

USE quote_remind;

CREATE TABLE notes (
  id INT NOT NULL AUTO_INCREMENT,
  message VARCHAR (280),
  created_at DATE NOT NULL DEFAULT CURRENT_DATE
  last_called DATE
  PRIMARY KEY (id)
);

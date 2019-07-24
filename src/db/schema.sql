DROP DATABASE IF EXISTS quote_remind;

CREATE DATABASE quote_remind;

\c quote_remind;

CREATE TABLE notes (
  id SERIAL PRIMARY KEY,
  message VARCHAR (280),
  created_at DATE NOT NULL DEFAULT CURRENT_DATE,
  last_called DATE
);

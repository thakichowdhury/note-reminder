DROP DATABASE IF EXISTS quote_remind;

CREATE DATABASE quote_remind;

\c quote_remind;

CREATE TABLE notes (
  id SERIAL PRIMARY KEY,
  phone_number BIGINT NOT NULL,
  message VARCHAR (280) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  last_called TIMESTAMP
);

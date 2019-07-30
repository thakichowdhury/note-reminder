DROP DATABASE IF EXISTS note_reminder;

CREATE DATABASE note_reminder;

\c note_reminder;

CREATE TABLE notes (
  id SERIAL PRIMARY KEY,
  phone_number BIGINT NOT NULL,
  message VARCHAR (280) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  last_called TIMESTAMP
);

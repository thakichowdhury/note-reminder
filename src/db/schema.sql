DROP DATABASE IF EXISTS note_reminder;

CREATE DATABASE note_reminder;

\c note_reminder;

CREATE TABLE users (
  phone_number BIGINT PRIMARY KEY,
  is_active BOOL NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE notes (
  id SERIAL PRIMARY KEY,
  phone_number BIGINT REFERENCES users (phone_number),
  message VARCHAR (280) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  last_called TIMESTAMP
);

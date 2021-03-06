const { Pool } = require('pg');
const os = require('os');
const isProd = require('../util/isProd');

const {
  REMIND_DB_NAME: database,
  REMIND_DB_USERNAME: user,
  REMIND_DB_AUTH: password,
} = require('../../secrets/local.js');

const host = isProd ? os.hostname() : 'localhost';
const port = process.env.PORT || 5432;

const connection = {
  host,
  port,
  database,
  user,
  password,
};

const pool = new Pool(connection);

pool.on('connect', () => {
  console.log(`${user}@${database} db connected at ${host}:${port}`);
});

module.exports = pool;

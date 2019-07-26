const moment = require('moment');

const db = require('../index');

const insertNewMessage = async (message) => {
  // const message = request.body.Body;
  const createdAt = moment().format('YYYY-MM-DD hh:mm:ss A');

  const query = 'INSERT into notes (message, created_at) VALUES ($1, $2);';
  const values = [message, createdAt];

  return db.query(query, values)
    .then(res => console.log(res))
    .catch(err => console.error(err));
};

exports = insertNewMessage;

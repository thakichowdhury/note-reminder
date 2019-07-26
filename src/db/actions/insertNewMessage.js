const moment = require('moment');

const db = require('../index');

const insertNewMessage = ({
  phoneString,
  message,
}) => {
  const createdAt = moment().format('YYYY-MM-DD hh:mm:ss A');
  const phoneNumber = parseInt(phoneString.slice(2), 10);

  const query = 'INSERT into notes (phone_number, message, created_at) VALUES ($1, $2, $3);';
  const values = [phoneNumber, message, createdAt];

  return db.query(query, values)
    .then(res => console.log(res))
    .catch(err => console.error(err));
};

module.exports = insertNewMessage;

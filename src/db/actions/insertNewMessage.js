const db = require('../index');

const getCurrentTimestamp = require('../../util/getCurrentTimestamp');

const insertNewMessage = ({
  phoneString,
  message,
}) => {
  const createdAt = getCurrentTimestamp();
  const phoneNumber = parseInt(phoneString.slice(2), 10);

  const query = 'INSERT into notes (phone_number, message, created_at) VALUES ($1, $2, $3);';
  const values = [phoneNumber, message, createdAt];

  return db.query(query, values)
    .then(res => console.log(res))
    .catch(err => console.error(err));
};

module.exports = insertNewMessage;

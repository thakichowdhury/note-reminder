const db = require('../index');

const getCurrentTimestamp = require('../../util/getCurrentTimestamp');

const fetchUser = require('./fetchUser');
const createNewUser = require('./createNewUser');

const insertNewMessage = async ({
  phoneString,
  message,
}) => {
  const createdAt = getCurrentTimestamp();
  const phoneNumber = parseInt(phoneString.slice(2), 10);

  let user = await fetchUser({ phoneNumber });

  if (!user) {
    user = await createNewUser({ phoneNumber });
  }

  const query = 'INSERT into notes (message, phone_number, created_at) VALUES ($1, $2, $3) RETURNING id;';
  const values = [message, user.phone_number, createdAt];

  return db.query(query, values)
    .then(res => console.log(res))
    .catch(err => console.error(err));
};

module.exports = insertNewMessage;

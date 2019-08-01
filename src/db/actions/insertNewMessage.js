const db = require('../index');

const getCurrentTimestamp = require('../../util/getCurrentTimestamp');

const fetchUser = require('./fetchUser');
const createNewUser = require('./createNewUser');

const insertNewMessage = async ({
  phoneNumber,
  message,
}) => {
  const createdAt = getCurrentTimestamp();

  let user = await fetchUser({ phoneNumber });

  if (!user) {
    user = await createNewUser({ phoneNumber });
  }

  const query = 'INSERT into notes (message, phone_number, created_at) VALUES ($1, $2, $3) RETURNING id;';
  const values = [message, user.phone_number, createdAt];

  return db.query(query, values)
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.error(err);
      return err;
    });
};

module.exports = insertNewMessage;

const db = require('../index');

const getCurrentTimestamp = require('../../util/getCurrentTimestamp');

const createNewUser = async ({ phoneNumber }) => {
  const createdAt = getCurrentTimestamp();

  const query = 'INSERT INTO users (phone_number, is_active, created_at) VALUES ($1, $2, $3) RETURNING phone_number;';
  const values = [phoneNumber, true, createdAt];

  try {
    const { rows } = await db.query(query, values);
    return rows[0];
  } catch (err) {
    console.error(err);
  }
};

module.exports = createNewUser;

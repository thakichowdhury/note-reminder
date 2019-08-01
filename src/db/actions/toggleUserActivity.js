const db = require('../index');

const getCurrentTimestamp = require('../../util/getCurrentTimestamp');

const toggleUserActivity = async ({ phoneNumber }) => {
  const modifiedAt = getCurrentTimestamp();

  const query = 'UPDATE users SET is_active = NOT is_active, modified_at = $2 WHERE phone_number = $1 RETURNING phone_number;';
  const values = [phoneNumber, modifiedAt];

  try {
    const { rows } = await db.query(query, values);
    return rows[0];
  } catch (err) {
    console.error(err);
  }
};

module.exports = toggleUserActivity;

const db = require('../index');

const fetchUser = async ({ phoneNumber }) => {
  const query = 'SELECT * FROM users WHERE "phone_number" = $1;';
  const values = [phoneNumber];

  try {
    const { rows } = await db.query(query, values);
    return rows[0];
  } catch (err) {
    console.error(err);
  }
};

module.exports = fetchUser;

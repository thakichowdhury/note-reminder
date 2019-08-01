const db = require('../index');

const sendQuery = async ({ query, values }) => {
  try {
    const { rows } = await db.query(query, values);
    return rows;
  } catch (err) {
    console.error(err);
  }
};

module.exports = sendQuery;

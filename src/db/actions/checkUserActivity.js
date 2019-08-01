const sendQuery = require('../util/sendQuery');

const checkUserActivity = async ({ phoneNumber }) => {
  const query = 'SELECT is_active FROM users WHERE phone_number = $1;';
  const values = [phoneNumber];

  const [response] = await sendQuery({ query, values });
  return response;
};

module.exports = checkUserActivity;

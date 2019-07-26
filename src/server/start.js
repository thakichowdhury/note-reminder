const moment = require('moment');

const app = require('./index.js');

const PORT = process.env.PORT || 3000;

const db = require('../db');

// TODO: break endpoints into a separate routes file
app.post('/sms', (request, response) => {
  const {
    body: {
      From,
      Body: message,
    },
  } = request;

  const createdAt = moment().format('YYYY-MM-DD hh:MM:SS A');
  const phoneNumber = parseInt(From.slice(2), 10);

  const query = 'INSERT into notes (phone_number, message, created_at) VALUES ($1, $2, $3);';
  const values = [phoneNumber, message, createdAt];

  db.query(query, values)
    .then(res => console.log(res))
    .catch(err => console.error(err));
});

app.listen(
  PORT,
  () => console.log(`Server listening on PORT ${PORT}`),
);

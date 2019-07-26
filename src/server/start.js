const moment = require('moment');

const app = require('./index.js');

const PORT = process.env.PORT || 3000;

const db = require('../db');

// TODO: break endpoints into a separate routes file
app.post('/sms', async (request, response) => {
  const message = request.body.Body;
  const createdAt = moment().format('YYYY-MM-DD hh:MM:SS A');

  const query = `INSERT into notes (message, created_at) VALUES ($1, $2);`;
  const values = [message, createdAt];

  db.query(query, values)
    .then(res => console.log(res))
    .catch(err => console.error(err));
});

app.listen(
  PORT,
  () => console.log(`Server listening on PORT ${PORT}`),
);

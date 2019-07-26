const moment = require('moment');

const app = require('./index.js');
const db = require('../db');
const { logEveryMinute } = require('./cron');

const PORT = process.env.PORT || 3000;

// TODO: break endpoints into a separate routes file
app.post('/sms', (request, response) => {
  const message = request.body.Body;
  const createdAt = moment().format('YYYY-MM-DD hh:mm:ss A');

  const query = `INSERT into notes (message, created_at) VALUES ($1, $2);`;
  const values = [message, createdAt];

  db.query(query, values)
    .then(res => console.log(res))
    .catch(err => console.error(err));
});

logEveryMinute.start();

app.listen(
  PORT,
  () => console.log(`Server listening on PORT ${PORT}`),
);

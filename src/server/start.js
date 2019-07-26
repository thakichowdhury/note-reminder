const app = require('./index.js');

const insertNewMessage = require('../db/actions/insertNewMessage');

// start cron-jobs
require('./cron');

const PORT = process.env.PORT || 3000;

// TODO: break endpoints into a separate routes file
app.post('/sms', ({ body }) => insertNewMessage(body.Body));

app.listen(
  PORT,
  () => console.log(`Server listening on PORT ${PORT}`),
);

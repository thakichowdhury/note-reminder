const app = require('./index.js');

const routeMessage = require('./actions/routeMessage');

// start cron-jobs
require('./cron');

const PORT = process.env.PORT || 3000;

// TODO: break endpoints into a separate routes file
app.post(
  '/sms',
  async ({
    body: {
      From: phoneString,
      Body: message,
    },
  }) => routeMessage({ phoneString, message }),
);

app.listen(
  PORT,
  () => console.log(`Server listening on PORT ${PORT}`),
);

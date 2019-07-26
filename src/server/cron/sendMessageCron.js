const cron = require('node-cron');
const db = require('../../db');

const createMessage = require('../../lib/twilio/createMessage');

// util
const getRandomInt = require('../../util/getRandomInt');
const getCurrentTimestamp = require('../../util/getCurrentTimestamp');

// run cron-job every 10 seconds
const sendMessageCron = cron.schedule('*/10 * * * * *', async () => {
  const { rows: [{ count }] } = await db.query('SELECT COUNT(*) FROM notes;');

  const randomId = getRandomInt(1, count);

  const { rows } = await db.query('SELECT message FROM notes WHERE id = $1;', [randomId]);
  const message = rows.length && rows[0].message;

  if (message) {
    console.log(message);
    createMessage({ message });

    db.query('UPDATE notes SET last_called = $1 WHERE id = $2', [getCurrentTimestamp(), randomId]);
  }
});

sendMessageCron.start();

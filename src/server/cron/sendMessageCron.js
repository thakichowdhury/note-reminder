const cron = require('node-cron');

const sendMessage = require('../../db/actions/sendMessage');

// run cron-job every 10 seconds
const sendMessageCron = cron.schedule('0 0 */3 * * *', sendMessage);

sendMessageCron.start();

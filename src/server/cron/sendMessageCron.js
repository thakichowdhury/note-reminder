const cron = require('node-cron');

const sendMessage = require('../../db/actions/sendMessage');

/*

 # ┌────────────── second (optional)
 # │ ┌──────────── minute
 # │ │ ┌────────── hour
 # │ │ │ ┌──────── day of month
 # │ │ │ │ ┌────── month
 # │ │ │ │ │ ┌──── day of week
 # │ │ │ │ │ │
 # │ │ │ │ │ │
 # * * * * * *

*/
const sendMessageCron = cron.schedule('0 0 */3 * * *', sendMessage);

sendMessageCron.start();

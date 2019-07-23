const twilio = require('twilio');
const auth = require('../../../secrets/local.js');

const twilioClient = twilio(auth.TWILIO_ACCOUNT_SID, auth.TWILIO_AUTH_TOKEN);

module.exports = twilioClient;

const twilioClient = require('./client');

const isProd = process.env.NODE_ENV === 'production';

const {
  TWILIO_PHONE_NUMBER,
  TWILIO_VERIFIED_NUMBER,
} = require('../../../secrets/local.js');

const twilioSendMessage = async ({
  to,
  message,
}) => {
  twilioClient.messages.create({
    to: !isProd ? TWILIO_VERIFIED_NUMBER : to,
    body: message,
    from: TWILIO_PHONE_NUMBER,
  })
    .then(sentMessage => console.log(`Message successfully sent: message_sid: ${sentMessage.sid}`))
    .catch(error => console.error(`Message was not sent: error: ${error}`));
};

module.exports = twilioSendMessage;

const twilioClient = require('./client');

const isProd = process.env.NODE_ENV === 'production';

const {
  TWILIO_PHONE_NUMBER,
  TWILIO_VERIFIED_NUMBER,
} = require('../../../secrets/local.js');

const twilioCreateMessage = async ({
  to,
  body,
}) => {
  twilioClient.messages.create({
    to: !isProd ? TWILIO_VERIFIED_NUMBER : to,
    body,
    from: TWILIO_PHONE_NUMBER,
  })
    .then(message => console.log(message.sid))
    .catch();
};

module.exports = twilioCreateMessage;

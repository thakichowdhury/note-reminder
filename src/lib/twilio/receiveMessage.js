const { MessagingResponse } = require('twilio').twiml;

const twilioReceiveMessage = async (message) => {
  const twiml = new MessagingResponse();
  twiml.message(message);
  return twiml;
};

module.exports = twilioReceiveMessage;

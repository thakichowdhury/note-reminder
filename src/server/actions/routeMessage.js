const insertNewMessage = require('../../db/actions/insertNewMessage');
const checkAndToggleUserActiveState = require('../../db/actions/checkAndToggleUserActiveState');

const sendMessage = require('../../lib/twilio/twilioSendMessage');

const routeMessage = async ({
  phoneString,
  message,
}) => {
  const phoneNumber = parseInt(phoneString.slice(2), 10);
  let responseMessage = '';

  // if incoming message is a directive to stop or start activity
  const messageUpperCase = message.toUpperCase();
  const isDirective = messageUpperCase === 'STOP' || messageUpperCase === 'START';

  if (isDirective) {
    // respond with appropriate action and response message
    responseMessage = await checkAndToggleUserActiveState({
      phoneNumber,
      directive: messageUpperCase,
    });
  } else {
    const insertResponse = await insertNewMessage({ phoneNumber, message });
    responseMessage = insertResponse.code === 200 ? 'Message was successfully saved!' : 'There was an error saving your message.';
  }

  sendMessage({ to: phoneNumber, message: responseMessage });
};

module.exports = routeMessage;

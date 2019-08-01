const insertNewMessage = require('../../db/actions/insertNewMessage');
const checkAndToggleUserActiveState = require('../../db/actions/checkAndToggleUserActiveState');

const sendMessage = require('../../lib/twilio/createMessage');

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
    await insertNewMessage({ phoneString, message });
    responseMessage = 'Message was successfully saved!';
  }

  sendMessage({ to: phoneNumber, message: responseMessage });
};

module.exports = routeMessage;

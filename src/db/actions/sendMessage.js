const db = require('../../db');

const fetchRandomNoteId = require('./fetchRandomNoteId');
const updateLastCalled = require('./updateLastCalled');

const twilioSendMessage = require('../../lib/twilio/twilioSendMessage');

const sendMessage = async () => {
  const randomId = await fetchRandomNoteId();

  if (randomId) {
    const query = 'SELECT phone_number, message FROM notes WHERE id = $1;';
    const values = [randomId];

    const { rows: [{ phone_number: phoneNumber, message }] } = await db.query(query, values);

    // send sms message to user phone number
    twilioSendMessage({ to: phoneNumber, message });

    // update the last_called field for the notes message
    updateLastCalled(randomId);
  }
};

module.exports = sendMessage;

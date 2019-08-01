const db = require('../../db');

const fetchRandomNoteId = require('./fetchRandomNoteId');
const updateLastCalled = require('./updateLastCalled');

const createMessage = require('../../lib/twilio/twilioSendMessage');

const sendMessage = async () => {
  const randomId = await fetchRandomNoteId();

  if (randomId) {
    const query = 'SELECT phone_number, message FROM notes WHERE id = $1;';
    const values = [randomId];

    const { rows: [{ phone_number: phoneNumber, message }] } = await db.query(query, values);

    createMessage({ to: phoneNumber, message });

    updateLastCalled(randomId);
  }
};

module.exports = sendMessage;

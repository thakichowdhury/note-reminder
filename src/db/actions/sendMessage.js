const db = require('../../db');

const fetchRandomNoteId = require('./fetchRandomNoteId');
const updateLastCalled = require('./updateLastCalled');

const createMessage = require('../../lib/twilio/createMessage');

const sendMessage = async () => {
  const randomId = await fetchRandomNoteId();

  const { rows: [{ message }] } = await db.query('SELECT message FROM notes WHERE id = $1;', [randomId]);

  createMessage({ message });
  console.log('MESSAGE_SENT:', message);

  updateLastCalled(randomId);
};

module.exports = sendMessage;

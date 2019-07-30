const db = require('../../db');

const fetchRandomNoteId = require('./fetchRandomNoteId');
const updateLastCalled = require('./updateLastCalled');

const createMessage = require('../../lib/twilio/createMessage');

const sendMessage = async () => {
  const randomId = await fetchRandomNoteId();

  if (randomId) {
    const query = 'SELECT message FROM notes WHERE id = $1;';
    const values = [randomId];

    const { rows: [{ message }] } = await db.query(query, values);

    createMessage({ message });

    updateLastCalled(randomId);
  }
};

module.exports = sendMessage;

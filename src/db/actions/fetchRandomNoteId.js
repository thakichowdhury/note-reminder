const db = require('../../db');

const getRandomInt = require('../../util/getRandomInt');

const fetchRandomNoteId = async () => {
  const { rows } = await db.query('SELECT id FROM notes;');

  const ids = rows.map(row => row.id);
  const randomInt = getRandomInt(1, ids.length);

  return ids[randomInt];
};

module.exports = fetchRandomNoteId;

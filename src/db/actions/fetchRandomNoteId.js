const db = require('../../db');

const getRandomInt = require('../../util/getRandomInt');

const fetchRandomNoteId = async () => {
  const { rows } = await db.query(`SELECT * FROM notes WHERE date_part('day', last_called) < date_part('day', NOW());`);

  const ids = rows.map(row => row.id);
  const randomInt = getRandomInt(0, ids.length - 1);

  return ids[randomInt];
};

module.exports = fetchRandomNoteId;

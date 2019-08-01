const db = require('../../db');

const getRandomInt = require('../../util/getRandomInt');

const fetchRandomNoteId = async () => {
  const { rows } = await db.query(
    // TODO: add check to see if the user that saved the message has is_active to true
    `
      SELECT id FROM notes
        WHERE 
          date_part('day', last_called) < date_part('day', NOW())
          OR date_part('day', created_at) < date_part('day', NOW())
          OR last_called IS NULL;
    `,
  );

  const ids = rows.map(row => row.id);
  const randomInt = getRandomInt(0, ids.length - 1);

  return ids[randomInt];
};

module.exports = fetchRandomNoteId;

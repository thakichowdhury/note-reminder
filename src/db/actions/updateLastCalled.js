const db = require('../../db');

const getCurrentTimestamp = require('../../util/getCurrentTimestamp');

const updateLastCalled = async (notesId) => {
  const lastCalled = getCurrentTimestamp();

  const query = 'UPDATE notes SET last_called = $1 WHERE id = $2 RETURNING id';
  const values = [lastCalled, notesId];

  const { rows: [{ id }] } = await db.query(query, values);
  return id;
};

module.exports = updateLastCalled;

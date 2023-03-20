const path = require('node:path');
const fs = require('node:fs/promises');

const dbPath = path.join(__dirname, '../../mockdb', 'users.json');

async function getUserWithUsername(username) {
  const jsonString = await fs.readFile(dbPath);
  const users = JSON.parse(jsonString);
  return users.find((user) => user.username === username) || null;
}

module.exports = {getUserWithUsername};


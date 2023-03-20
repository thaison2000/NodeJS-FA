const path = require('node:path');
const fs = require('node:fs/promises');

const dbPath = path.join(__dirname, '../../mockdb', 'roles.json');

async function getRoleById(id) {
  const jsonString = await fs.readFile(dbPath);
  const roles = JSON.parse(jsonString);
  return roles.find((role) => role.id === id) || null;
}

module.exports = {getRoleById};



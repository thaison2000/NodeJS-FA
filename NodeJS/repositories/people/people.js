const path = require('node:path');
const fs = require('node:fs/promises');

const dbPath = path.join(__dirname, '../../mockdb', 'people.json');

async function getAllPeople() {
  const jsonString = await fs.readFile(dbPath);
  const people = JSON.parse(jsonString);
  return people;
}

module.exports = {getAllPeople};

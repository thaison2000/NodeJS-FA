const path = require('node:path');
const fs = require('node:fs/promises');
const {nanoid} = require('nanoid');

const dbPath = path.join(__dirname, '../../mockdb', 'sessions.json');

// Generate session ID, save it to database, return that ID
async function generateSessionForUser(username) {
  const jsonString = await fs.readFile(dbPath);
  const sessions = JSON.parse(jsonString);
  const newSessionId = nanoid();
  const newSessions = [...sessions, {id: newSessionId, username}];
  await fs.writeFile(dbPath, JSON.stringify(newSessions));
  return newSessionId;
}

async function checkSession(sessionId) {
  try {
    const jsonString = await fs.readFile(dbPath);
    const sessions = JSON.parse(jsonString);
    const sessionIndex = sessions.findIndex((s) => s.id === sessionId);
    if (sessionIndex > -1) {
      return true;
    } else {
      return false
    }
  } catch (err) {
    console.error(err);
    return false;
  }
}

async function deleteSession(sessionId) {
  const jsonString = await fs.readFile(dbPath);
  const sessions = JSON.parse(jsonString);
  const sessionIndex = sessions.findIndex((s) => s.id === sessionId);
  sessions.splice(sessionIndex, 1);
  await fs.writeFile(dbPath, JSON.stringify(sessions));
  return;
}

module.exports = {generateSessionForUser, checkSession, deleteSession};
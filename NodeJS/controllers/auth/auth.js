const jwt = require('jsonwebtoken');
const {getUserWithUsername} = require('../../repositories');
const {resFromData} = require('../../utilities');

// .env
const {secret} = process.env;

console.log(secret);

async function loginController(req, res, next) {
  const {username, password} = req.body || {};
  const user = await getUserWithUsername(username);
  if (user) {
    // let hashedPassword = hash(password, secret, salt??);
    // hashedPassword === user.password
    if (password === user.password) {
      const token = jwt.sign({username}, secret);
      res.json(resFromData(token));
    } else {
      next(new Error('Wrong username or password!'));
    }
  } else {
    next(new Error('Wrong username or password!'));
  }
}

module.exports = {loginController};

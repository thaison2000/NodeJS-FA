const jwt = require('jsonwebtoken');
const { getUserWithUserName } = require('../../repositories');
const { resFromData } = require('../../utilities');
const { createUser } = require('../../repositories')

// .env

async function loginController(req, res, next) {
  const { username, password } = req.body || {};
  const user = await getUserWithUserName(username);
  if (user) {
    if (password === user.password) {
      const secret = process.env.secret;
      const token = jwt.sign({username}, secret);
      return res.status(200).json(token)
    } else {
      next(new Error('Wrong username or password!'));
    }
    return res.status(200).json(user)
  } else {
    return res.status(500).json('error')
  }
}

async function registerController(req, res, next) {
  const { username, password, employeeNumber, roleId } = req.body || {};
  const user = await createUser(username, password, employeeNumber, roleId);
  if (user) {
    return res.status(200).json(user)
  } else {
    return res.status(500).json('error')
  }
}

module.exports = { loginController, registerController };

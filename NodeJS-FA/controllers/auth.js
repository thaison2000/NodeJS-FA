const jwt = require('jsonwebtoken');
const { ErrorResponse } = require('../utilities')
const { getUserWithUserName } = require('../repositories');
const { createUser } = require('../repositories');

async function loginController(req, res, next) {
  const { username, password } = req.body || {};
  const user = await getUserWithUserName(username)

  if (!user) {
    return next(new ErrorResponse(404, 'username not found'))
  }
  else {
    if (password === user.password) {
      const secret = process.env.secret
      const token = jwt.sign({ username }, secret)
      return res.status(200).json({ user, token })
    }
    else {
      return next(new ErrorResponse(400, 'wrong password'))
    }
  }
}

async function registerController(req, res, next) {
  const { username, password, employeeNumber, roleId } = req.body || {};

  let user = await getUserWithUserName(username)

  if (user)
    return next(new ErrorResponse(403, 'user exist'));

  try {
    user = await createUser(username, password, employeeNumber, roleId);
    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
}

module.exports = { loginController, registerController };

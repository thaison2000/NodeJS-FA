const jwt = require('jsonwebtoken');
const { ErrorResponse } = require('../utilities')
const { msgEnum, codeEnum } = require('../constants')
const { getUserWithUserName } = require('../repositories');
const { createUser } = require('../repositories');
const { UserModel } = require('../models');

async function loginController(req, res, next) {
  const { username, password } = req.body || {};
  const user = await getUserWithUserName(username);

  if (!user) {
    return next(new ErrorResponse(msgEnum.USER_NOT_FOUND, codeEnum.NOT_FOUND));
  }
  else {
    if (password === user.password) {
      const secret = process.env.secret;
      const token = jwt.sign({ username }, secret);
      return res.status(codeEnum.SUCCESS).json({ user, token });
    }
    else {
      return next(new ErrorResponse(msgEnum.USER_NOT_FOUND, codeEnum.NOT_FOUND));
    }
  }
}

async function registerController(req, res, next) {
  const { username, password, employeeNumber, roleId } = req.body || {};

  if (!username || !password || !employeeNumber || !roleId) {
    return next(new ErrorResponse(msgEnum.USER_NOT_FOUND, codeEnum.NOT_FOUND));
  }

  let user = await UserModel.findOne({ username });

  if (user)
    return next(new ErrorResponse(msgEnum.USER_EXIST, codeEnum.BAD_REQUEST));

  try {
    user = await createUser(username, password, employeeNumber, roleId);
    res.status(codeEnum.SUCCESS).json({ user });
  } catch (error) {
    next(error);
  }
}

module.exports = { loginController, registerController };

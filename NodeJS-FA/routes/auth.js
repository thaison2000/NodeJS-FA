const express = require('express');
const { loginController, registerController } = require('../controllers');
const { userRegisterValidatorFunc, userLoginValidatorFunc } = require('../validations');

const authRoute = express.Router()

authRoute.post(
    '/register',
    userRegisterValidatorFunc,
    registerController
);
authRoute.post(
    '/login',
    userLoginValidatorFunc,
    loginController
);

module.exports = { authRoute }
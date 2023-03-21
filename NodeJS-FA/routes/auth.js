const express = require('express');
const { loginController, registerController } = require('../controllers')

const authRoute = express.Router()

authRoute.post('/register', registerController);
authRoute.post('/login', loginController);

module.exports = { authRoute }
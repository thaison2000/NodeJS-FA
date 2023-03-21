const express = require('express');
const { createRoleController } = require('../controllers')

const roleRoute = express.Router()

roleRoute.post('/register', createRoleController);

module.exports = { roleRoute }
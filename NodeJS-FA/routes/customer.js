const express = require('express');
const { getAllCustomersController, deleteCustomerController, updateCustomerController, createCustomerController } = require('../controllers')
const { authenticationRequired, permissionRequired } = require('../middlewares');
const { PERMS } = require('../constants');


const customerRoute = express.Router()

customerRoute.post('/', authenticationRequired, permissionRequired(PERMS.Customer_Create), createCustomerController);
customerRoute.put('/', authenticationRequired, permissionRequired(PERMS.Customer_Update), updateCustomerController);
customerRoute.get('/', authenticationRequired, permissionRequired(PERMS.Customer_Read), getAllCustomersController);
customerRoute.delete('/', authenticationRequired, permissionRequired(PERMS.Customer_Delete), deleteCustomerController);

module.exports = { customerRoute }
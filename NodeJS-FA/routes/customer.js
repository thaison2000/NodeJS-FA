const express = require('express');
const { getAllCustomersController, deleteCustomerController, updateCustomerController, createCustomerController } = require('../controllers')
const { authenticationRequired, permissionRequired } = require('../middlewares');
const { PERMS } = require('../constants');
const { customerCreateValidatorFunc, customerUpdateValidatorFunc } = require('../validations');


const customerRoute = express.Router()

customerRoute.post(
    '/',
    authenticationRequired,
    permissionRequired(PERMS.Customer_Create),
    customerCreateValidatorFunc,
    createCustomerController
);

customerRoute.put(
    '/',
    authenticationRequired,
    permissionRequired(PERMS.Customer_Update),
    customerUpdateValidatorFunc,
    updateCustomerController
);

customerRoute.get(
    '/',
    authenticationRequired,
    permissionRequired(PERMS.Customer_Read),
    getAllCustomersController
);

customerRoute.delete(
    '/',
    authenticationRequired,
    permissionRequired(PERMS.Customer_Delete),
    deleteCustomerController
);

module.exports = { customerRoute }
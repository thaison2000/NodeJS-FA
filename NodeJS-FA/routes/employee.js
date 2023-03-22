const express = require('express');
const { getAllEmployeesController, deleteEmployeeController, updateEmployeeController, createEmployeeController } = require('../controllers')
const { authenticationRequired, permissionRequired } = require('../middlewares');
const { PERMS } = require('../constants');
const { employeeCreateValidatorFunc, employeeUpdateValidatorFunc } = require('../validations');


const employeeRoute = express.Router()

employeeRoute.post(
    '/',
    authenticationRequired,
    permissionRequired(PERMS.Employee_Create),
    employeeCreateValidatorFunc,
    createEmployeeController
);

employeeRoute.put(
    '/:employeeNumber',
    authenticationRequired,
    permissionRequired(PERMS.Employee_Update),
    employeeUpdateValidatorFunc,
    updateEmployeeController
);

employeeRoute.get(
    '/',
    authenticationRequired,
    permissionRequired(PERMS.Employee_Read),
    getAllEmployeesController
);

employeeRoute.delete(
    '/:employeeNumber'
    , authenticationRequired,
    permissionRequired(PERMS.Employee_Delete),
    deleteEmployeeController
);

module.exports = { employeeRoute }
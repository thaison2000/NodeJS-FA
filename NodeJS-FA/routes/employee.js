const express = require('express');
const { getAllEmployeesController, deleteEmployeeController, updateEmployeeController, createEmployeeController } = require('../controllers')
const { authenticationRequired, permissionRequired } = require('../middlewares');
const { PERMS } = require('../constants');


const employeeRoute = express.Router()

employeeRoute.post('/', authenticationRequired, permissionRequired(PERMS.Employee_Create), createEmployeeController);
employeeRoute.put('/', authenticationRequired, permissionRequired(PERMS.Employee_Update), updateEmployeeController);
employeeRoute.get('/', authenticationRequired, permissionRequired(PERMS.Employee_Read), getAllEmployeesController);
employeeRoute.delete('/', authenticationRequired, permissionRequired(PERMS.Employee_Delete), deleteEmployeeController);

module.exports = { employeeRoute }
const { createEmployee, updateEmployee, deleteEmployee, getAllEmployees } = require('../repositories');
const { ErrorResponse } = require('../utilities')
const { msgEnum, codeEnum } = require('../constants')
// .env

async function createEmployeeController(req, res, next) {
    const { employeeNumber, firstName, lastName, extension, email, officeCode, jobTitle } = req.body || {};
    try {
        const employee = await createEmployee({ employeeNumber, firstName, lastName, extension, email, officeCode, jobTitle });
        res.status(codeEnum.SUCCESS).json({ message: msgEnum.ADD_SUCCESS, employee })
    } catch (error) {
        next(error)
    }
}

async function updateEmployeeController(req, res, next) {
    const employeeNumber = req.params.employeeNumber
    const { firstName, lastName, extension, email, officeCode, jobTitle } = req.body || {};
    try {
        const employee = await updateEmployee({ employeeNumber, firstName, lastName, extension, email, officeCode, jobTitle });
        res.status(codeEnum.SUCCESS).json({ message: msgEnum.UPDATE_SUCCESS, employee })
    } catch (error) {
        next(error)
    }
}

async function deleteEmployeeController(req, res, next) {
    const { employeeNumber } = req.params.employeeNumber || {};
    try {
        const employee = await deleteEmployee(employeeNumber);
        res.status(codeEnum.SUCCESS).json({ message: msgEnum.DELETE_SUCCESS, employee })
    } catch (error) {
        next(error)
    }
}

async function getAllEmployeesController(req, res, next) {
    try {
        const employees = await getAllEmployees();
        res.status(codeEnum.SUCCESS).json({ message: msgEnum.READ_SUCCESS, employees })
    } catch (error) {
        next(error)
    }
}

module.exports = { createEmployeeController, updateEmployeeController, deleteEmployeeController, getAllEmployeesController };

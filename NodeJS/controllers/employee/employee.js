const { createEmployee, updateEmployee, deleteEmployee, getAllEmployees } = require('../../repositories');

// .env

async function createEmployeeController(req, res, next) {
    const { employeeNumber, firstName, lastName, extension, email, officeCode, jobTitle } = req.body || {};
    const data = await createEmployee({ employeeNumber, firstName, lastName, extension, email, officeCode, jobTitle });
    if (data) {
        res.status(200).json(data)
    } else {
        res.status(500).json(data)
    }
}

async function updateEmployeeController(req, res, next) {
    const employeeNumber = req.params.employeeNumber
    const { firstName, lastName, extension, email, officeCode, jobTitle } = req.body || {};
    const data = await updateEmployee({ employeeNumber, firstName, lastName, extension, email, officeCode, jobTitle });
    if (data) {
        res.status(200).json(data)
    } else {
        res.status(500).json(data)
    }
}

async function deleteEmployeeController(req, res, next) {
    const { employeeNumber } = req.body || {};
    const data = await deleteEmployee(req.params.employeeNumber);
    if (data) {
        res.status(200).json(data)
    } else {
        res.status(500).json(data)
    }
}

async function getAllEmployeesController(req, res, next) {
    
    const data = await getAllEmployees();
    if (data) {
        res.status(200).json(data)
    } else {
        res.status(500).json(data)
    }
}

module.exports = { createEmployeeController, updateEmployeeController, deleteEmployeeController, getAllEmployeesController };

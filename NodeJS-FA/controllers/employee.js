const { createEmployee, updateEmployee, deleteEmployee, getAllEmployees } = require('../repositories');

async function createEmployeeController(req, res, next) {
    try {
        const employee = await createEmployee(req.body);
        res.status(200).json({ employee })
    } catch (error) {
        next(error)
    }
}

async function updateEmployeeController(req, res, next) {
    const employeeNumber = req.params.employeeNumber
    try {
        const employee = await updateEmployee(employeeNumber, req.body);
        res.status(200).json({ employee })
    } catch (error) {
        next(error)
    }
}

async function deleteEmployeeController(req, res, next) {
    const { employeeNumber } = req.params.employeeNumber || {};
    try {
        const employee = await deleteEmployee(employeeNumber);
        res.status(200).json({ employee })
    } catch (error) {
        next(error)
    }
}

async function getAllEmployeesController(req, res, next) {
    try {
        const employees = await getAllEmployees();
        res.status(200).json({ employees })
    } catch (error) {
        next(error)
    }
}

module.exports = { createEmployeeController, updateEmployeeController, deleteEmployeeController, getAllEmployeesController };

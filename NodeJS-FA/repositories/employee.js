const { EmployeeModel } = require('../models')

async function createEmployee(employee) {
    try {
        const newEmployee = EmployeeModel.create({
            employeeNumber: employee.employeeNumber,
            firstName: employee.firstName,
            lastName: employee.lastName,
            extension: employee.extension,
            email: employee.email,
            officeCode: employee.officeCode,
            jobTitle: employee.jobTitle
        })
        return newEmployee
    }
    catch (error) {
        return error
    }
}

async function getAllEmployees() {
    try {
        const employees = await EmployeeModel.find()
        return employees
    } catch (error) {
        return err
    }
}

async function updateEmployee(employeeNumber, employee) {
    try {
        const updateEmployee = await EmployeeModel.updateOne({
            employeeNumber: employeeNumber
        },
            {
                employee
            });
        return updateEmployee
    } catch (error) {
        return error
    }
}

async function deleteEmployee(employeeNumber) {
    try {
        const deleteEmployee = await EmployeeModel.deleteOne({
            employeeNumber: employeeNumber
        },
            {
                employee
            });
        return deleteEmployee
    } catch (error) {
        return error
    }
}

module.exports = { createEmployee, getAllEmployees, updateEmployee, deleteEmployee };



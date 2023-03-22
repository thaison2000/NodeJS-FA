const { EmployeeModel } = require('../models')

async function createEmployee(employee) {
    try {
        const newEmployee = EmployeeModel.create(employee)
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
        const updateEmployee = await EmployeeModel.findOneAndUpdate({
            employeeNumber: employeeNumber
        },

            employee
            , { new: true });
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



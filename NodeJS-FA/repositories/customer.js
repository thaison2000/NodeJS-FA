const { CustomerModel } = require('../models')

async function createCustomer(customer) {
    console.log(customer)
    try {
        const newCustomer = CustomerModel.create(customer)
        return newCustomer
    }
    catch (error) {
        return error
    }
}

async function getAllCustomers() {
    try {
        const Customers = await CustomerModel.find()
        return Customers
    } catch (error) {
        return err
    }
}

async function updateCustomer(customerNumber, customer) {
    try {
        const updateCustomer = await CustomerModel.updateOne({
            customerNumber: customerNumber
        },
            customer);
        return updateCustomer
    } catch (error) {
        return error
    }
}

async function deleteCustomer(customerNumber) {
    try {
        const deleteCustomer = await CustomerModel.deleteOne({
            customerNumber: customerNumber
        });
        return deleteCustomer
    } catch (error) {
        return error
    }
}

module.exports = { createCustomer, getAllCustomers, updateCustomer, deleteCustomer };



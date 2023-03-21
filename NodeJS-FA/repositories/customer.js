const { CustomerModel } = require('../models')

async function createCustomer(customer) {
    console.log(customer)
    try {
        const newCustomer = CustomerModel.create({
            customerNumber: customer.customerNumber,
            customerName: customer.customerName,
            contactFirstName: customer.contactFirstName,
            contactLastName: customer.contactLastName,
            phone: customer.phone,
            addressLine1: customer.addressLine1,
            addressLine2: customer.addressLine2,
            city: customer.city,
            state: customer.state,
            postalCode: customer.postalCode,
            country: customer.country,
            salesRepEmployeeNumber: customer.salesRepEmployeeNumber,
            creditLemit: customer.creditLemit
        })
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
            {
                customer
            });
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



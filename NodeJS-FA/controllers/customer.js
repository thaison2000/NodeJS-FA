const { createCustomer, updateCustomer, deleteCustomer, getAllCustomers } = require('../repositories');
const { ErrorResponse } = require('../utilities')
const { msgEnum, codeEnum } = require('../constants')
// .env

async function createCustomerController(req, res, next) {
    const { customerNumber, customerName, contactFirstName, contactLastName, phone, city, state, addressLine1, addressLine2, postalCode, country, creditLimit, salesRepEmployeeNumber } = req.body || {};
    try {
        if (req.customers) {
            if (req.customers.length == 0) {
                const customer = await createCustomer({ customerNumber, customerName, contactFirstName, contactLastName, phone, city, state, addressLine1, addressLine2, postalCode, country, creditLimit, salesRepEmployeeNumber });
                return res.status(codeEnum.SUCCESS).json({ message: msgEnum.ADD_SUCCESS, customer })
            }
            else {
                if (req.customers.some((customer) => customer.customerNumber == customerNumber)) {
                    const customer = await createCustomer({ customerNumber, customerName, contactFirstName, contactLastName, phone, city, state, addressLine1, addressLine2, postalCode, country, creditLimit, salesRepEmployeeNumber });
                    return res.status(codeEnum.SUCCESS).json({ message: msgEnum.ADD_SUCCESS, customer })
                }
                else {
                    return next(new ErrorResponse(msgEnum.NOT_PERMISSION, codeEnum.FORBIDDEN));
                }
            }
        }
        else {
            const customer = await createCustomer({ customerNumber, customerName, contactFirstName, contactLastName, phone, city, state, addressLine1, addressLine2, postalCode, country, creditLimit, salesRepEmployeeNumber });
            return res.status(codeEnum.SUCCESS).json({ message: msgEnum.ADD_SUCCESS, customer })
        }
    } catch (error) {
        next(error)
    }
}

async function updateCustomerController(req, res, next) {
    const customerNumber = req.params.customerNumber
    const { customerName, contactFirstName, contactLastName, phone, city, state, addressLine1, addressLine2, postalCode, country, creditLimit, salesRepEmployeeNumber } = req.body || {};
    try {
        if (req.customers) {
            if (req.customers.length == 0) {
                const customer = await updateCustomer({ customerNumber, customerName, contactFirstName, contactLastName, phone, city, state, addressLine1, addressLine2, postalCode, country, creditLimit, salesRepEmployeeNumber });
                return res.status(codeEnum.SUCCESS).json({ message: msgEnum.UPDATE_SUCCESS, customer })
            }
            else {
                if (req.customers.some((customer) => customer.customerNumber == customerNumber)) {
                    const customer = await updateCustomer({ customerNumber, customerName, contactFirstName, contactLastName, phone, city, state, addressLine1, addressLine2, postalCode, country, creditLimit, salesRepEmployeeNumber });
                    return res.status(codeEnum.SUCCESS).json({ message: msgEnum.UPDATE_SUCCESS, customer })
                }
                else {
                    return next(new ErrorResponse(msgEnum.NOT_PERMISSION, codeEnum.FORBIDDEN));
                }
            }
        }
        else {
            const customer = await updateCustomer({ customerNumber, contactFirstName, contactLastName, phone, city, state, addressLine1, addressLine2, postCode, country, creditLimit, salesRepEmployeeNumber });
            return res.status(codeEnum.SUCCESS).json({ message: msgEnum.UPDATE_SUCCESS, customer })
        }
    } catch (error) {
        next(error)
    }
}

async function deleteCustomerController(req, res, next) {
    const { customerNumber } = req.params.customerNumber || {};
    try {
        if (req.customers.length > 0) {
            if (req.customers.some((customer) => customer.customerNumber == customerNumber)) {
                const customer = await deleteCustomer(customerNumber);
                return res.status(codeEnum.SUCCESS).json({ message: msgEnum.DELETE_SUCCESS, customer })
            }
            else {
                return next(new ErrorResponse(msgEnum.NOT_PERMISSION, codeEnum.FORBIDDEN));
            }
        }
        else {
            const customer = await deleteCustomer(customerNumber);
            return res.status(codeEnum.SUCCESS).json({ message: msgEnum.DELETE_SUCCESS, customer })
        }
    } catch (error) {
        next(error)
    }
}

async function getAllCustomersController(req, res, next) {
    try {
        if (req.customers) {
            res.status(codeEnum.SUCCESS).json({ message: msgEnum.READ_SUCCESS, customers: req.customers })
        }
        else {
            const customers = await getAllCustomers();
            res.status(codeEnum.SUCCESS).json({ message: msgEnum.READ_SUCCESS, customers })
        }
    } catch (error) {
        next(error)
    }
}

module.exports = { createCustomerController, updateCustomerController, deleteCustomerController, getAllCustomersController };

const { createCustomer, updateCustomer, deleteCustomer, getAllCustomers } = require('../repositories');
const { ErrorResponse } = require('../utilities')

async function createCustomerController(req, res, next) {
    try {
        if (req.customers) {
            if (req.user.role = 'Staff') {
                if (req.user.employeeNumber = req.body.salesRepEmployeeNumber) {
                    const customer = await createCustomer(req.body);
                    return res.status(200).json({ customer })
                }
                else {
                    return next(new Error('You are not authorized to perform this action!'));
                }
            }
            else {
                if (req.user.officeCode = req.body.officeCode) {
                    const customer = await createCustomer(req.body);
                    return res.status(200).json({ customer })
                }
                else {
                    return next(new Error('You are not authorized to perform this action!'));
                }
            }
        }
        else {
            const customer = await createCustomer(req.body);
            return res.status(200).json({ customer })
        }
    } catch (error) {
        next(error)
    }
}

async function updateCustomerController(req, res, next) {
    const customerNumber = req.params.customerNumber
    try {
        if (req.customers) {
            if (req.user.role = 'Staff') {
                if (req.user.employeeNumber = req.body.salesRepEmployeeNumber) {
                    const customer = await updateCustomer(customerNumber, req.body);
                    return res.status(200).json({ customer })
                }
                else {
                    return next(new Error('You are not authorized to perform this action!'));
                }
            }
            else {
                if (req.user.officeCode = req.body.officeCode) {
                    const customer = await updateCustomer(customerNumber, req.body);
                    return res.status(200).json({ customer })
                }
                else {
                    return next(new Error('You are not authorized to perform this action!'));
                }
            }
        }
        else {
            const customer = await updateCustomer(req.body);
            return res.status(200).json({ customer })
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
                return res.status(200).json({ customer })
            }
            else {
                return next(new ErrorResponse('You are not authorized to perform this action!', 403));
            }
        }
        else {
            const customer = await deleteCustomer(customerNumber);
            return res.status(200).json({ customer })
        }
    } catch (error) {
        next(error)
    }
}

async function getAllCustomersController(req, res, next) {
    try {
        if (req.customers) {
            res.status(200).json({ customers: req.customers })
        }
        else {
            const customers = await getAllCustomers();
            res.status(200).json({ customers })
        }
    } catch (error) {
        next(error)
    }
}

module.exports = { createCustomerController, updateCustomerController, deleteCustomerController, getAllCustomersController };

const Joi = require('joi');

const customerCreateValidator = Joi.object({
    customerNumber: Joi.number()
        .required(),

    contactFirstName: Joi.string()
        .alphanum()
        .min(3)
        .max(50)
        .required(),

    contactLastName: Joi.string()
        .alphanum()
        .min(3)
        .max(50)
        .required(),

    customerName: Joi.string()
        .alphanum()
        .min(5)
        .max(50)
        .required(),

    phone: Joi.string()
        .min(8)
        .max(20)
        .required(),

    addressLine1: Joi.string()
        .alphanum()
        .min(10)
        .max(50)
        .required(),

    addressLine2: Joi.string()
        .alphanum()
        .min(10)
        .max(50),

    city: Joi.string()
        .alphanum()
        .min(2)
        .max(50),

    postalCode: Joi.string()
        .min(5)
        .max(15),

    state: Joi.string()
        .alphanum()
        .min(2)
        .max(50),

    country: Joi.string()
        .alphanum()
        .min(2)
        .max(50),

    creditLimit: Joi.number(),

    salesRepEmployeeNumber: Joi.number()
        .required()

})

const customerUpdateValidator = Joi.object({
    customerNumber: Joi.forbidden(),

    contactFirstName: Joi.string()
        .alphanum()
        .min(3)
        .max(50)
        .required(),

    contactLastName: Joi.string()
        .alphanum()
        .min(3)
        .max(50)
        .required(),

    customerName: Joi.string()
        .alphanum()
        .min(5)
        .max(50)
        .required(),

    phone: Joi.string()
        .min(8)
        .max(20)
        .required(),

    addressLine1: Joi.string()
        .alphanum()
        .min(10)
        .max(50)
        .required(),

    addressLine2: Joi.string()
        .alphanum()
        .min(10)
        .max(50),

    city: Joi.string()
        .alphanum()
        .min(2)
        .max(50),

    postalCode: Joi.string()
        .min(5)
        .max(15),

    state: Joi.string()
        .alphanum()
        .min(2)
        .max(50),

    country: Joi.string()
        .alphanum()
        .min(2)
        .max(50),

    creditLimit: Joi.number(),

    salesRepEmployeeNumber: Joi.number()
        .required()
})

const customerCreateValidatorFunc = async (req, res, next) => {
    try {
        await customerCreateValidator.validateAsync(req.body)
        next()
    } catch (error) {
        next(error)
    }
}

const customerUpdateValidatorFunc = async (req, res, next) => {
    try {
        await customerUpdateValidator.validateAsync(req.body)
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = { customerCreateValidatorFunc, customerUpdateValidatorFunc }
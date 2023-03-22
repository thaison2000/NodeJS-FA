const Joi = require('joi');

const employeeCreateValidator = Joi.object({
    employeeNumber: Joi.number()
        .required(),

    firstName: Joi.string()
        .alphanum()
        .min(3)
        .max(50)
        .required(),

    lastName: Joi.string()
        .alphanum()
        .min(3)
        .max(50)
        .required(),

    extension: Joi.string()
        .alphanum()
        .max(50)
        .required(),

    officeCode: Joi.string()
        .alphanum()
        .max(10)
        .required(),

    reportsTo: Joi.string()
        .alphanum()
        .min(3)
        .max(5),

    jobTitle: Joi.string()
        .alphanum()
        .required(),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})

const employeeUpdateValidator = Joi.object({
    employeeNumber: Joi.forbidden(),

    firstName: Joi.string().forbidden(),

    lastName: Joi.string().forbidden(),

    extension: Joi.string()
        .alphanum()
        .max(50)
        .required(),

    officeCode: Joi.string()
        .alphanum()
        .max(10)
        .required(),

    reportsTo: Joi.string()
        .alphanum()
        .min(3)
        .max(5),

    jobTitle: Joi.string()
        .alphanum()
        .required(),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})

const employeeCreateValidatorFunc = async (req, res, next) => {
    try {
        await employeeCreateValidator.validateAsync(req.body)
        next()
    } catch (error) {
        next(error)
    }
}

const employeeUpdateValidatorFunc = async (req, res, next) => {
    try {
        await employeeUpdateValidator.validateAsync(req.body)
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = { employeeCreateValidatorFunc, employeeUpdateValidatorFunc}
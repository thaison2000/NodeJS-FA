const Joi = require('joi');

const userRegisterValidator = Joi.object({
    employeeNumber: Joi.number()
        .required(),

    username: Joi.string()
        .alphanum()
        .min(3)
        .max(20)
        .required(),

    password: Joi.string()
        .alphanum()
        .min(6)
        .max(100)
        .required()
        .pattern(new RegExp('^[a-zA-Z0-9]{6,100}$')),

    employeeNumber: Joi.number()
        .required(),

    roleId: Joi.number()
        .required(),
})

const userLoginValidator = Joi.object({

    username: Joi.string()
        .alphanum()
        .min(3)
        .max(20)
        .required(),

    password: Joi.string()
        .alphanum()
        .min(6)
        .max(100)
        .required()
        .pattern(new RegExp('^[a-zA-Z0-9]{6,100}$'))
})

const userRegisterValidatorFunc = async (req, res, next) => {
    try {
        await userRegisterValidator.validateAsync(req.body)
        next()
    } catch (error) {
        next(error)
    }
}

const userLoginValidatorFunc = async (req, res, next) => {
    try {
        await userLoginValidator.validateAsync(req.body)
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = { userLoginValidatorFunc, userRegisterValidatorFunc }
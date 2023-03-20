const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeSchema = new Schema({
    employeeNumber: {
        type: Number, 
        required: true, 
        null: false
    },
    firstName: {
        type: String, 
        required: true, 
        minlength: 3, 
        maxlength: 50, 
        null: false
    },
    lastName: {
        type: String, 
        required: true, 
        minlength: 3, 
        maxlength: 50, 
        null: false
    },
    extension: {
        type: String, 
        required: true, 
        maxlength: 50, 
        null: false
    },
    email: {
        type: String, 
        required: true, 
        minlength: 10, 
        maxlength: 100, 
        null: false
    },
    officeCode: {
        type: String, 
        required: true, 
        maxlength: 10, 
        null: false
    },
    reportsTo: {
        type: String, 
        required: false, 
        minlength: 3, 
        maxlength: 5, 
        null: true
    },
    jobTitle: {
        type: String, 
        required: true, 
    },
});

const EmployeeModel = mongoose.model('Employees', employeeSchema)
module.exports = {EmployeeModel}
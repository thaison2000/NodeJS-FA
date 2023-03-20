const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customerSchema = new Schema({
    customerNumber: {
        type: Number, 
        required: true, 
        null: false
    },
    customerName: {
        type: String, 
        required: true, 
        minlength: 5, 
        maxlength: 50, 
        null: false
    },
    contactLastName: {
        type: String, 
        required: true, 
        minlength: 3, 
        maxlength: 50, 
        null: false
    },
    contactFirstName: {
        type: String, 
        required: true, 
        maxlength: 50, 
        null: false
    },
    phone: {
        type: String, 
        required: true, 
        minlength: 8, 
        maxlength: 20, 
        null: false
    },
    addressLine1: {
        type: String, 
        required: true, 
        minlength: 10, 
        maxlength: 50,
        null: false
    },
    addressLine2: {
        type: String, 
        required: false, 
        minlength: 10, 
        maxlength: 50, 
        null: true
    },
    city: {
        type: String, 
        required: false, 
        minlength: 2, 
        maxlength: 50, 
        null: false
    },
    state: {
        type: String, 
        required: false, 
        minlength: 2, 
        maxlength: 50, 
        null: true
    },
    postalCode: {
        type: String, 
        required: false, 
        minlength: 5, 
        maxlength: 15, 
        null: true
    },
    country: {
        type: String, 
        required: true, 
        minlength: 2, 
        maxlength: 50, 
        null: false
    },
    salesRepEmployeeNumber: {
        type: Number, 
        required: true, 
        null: true
    },
    creditLemit: {
        type: String, 
        required: false, 
        null: true
    },
});

const CustomerModel = mongoose.model('Customers', customerSchema)
module.exports = {CustomerModel}
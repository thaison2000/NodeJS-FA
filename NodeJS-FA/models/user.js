const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    employeeNumber: {
        type: Number,
        required: true,
        null: false
    },
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,
        null: false
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 100,
        null: false
    },
    roleId: {
        type: Number,
        required: true,
        null: false
    }
});

const UserModel = mongoose.model('Users', userSchema)
module.exports = { UserModel }
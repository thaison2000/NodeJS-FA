const mongoose = require('mongoose')
const Schema = mongoose.Schema

const roleSchema = new Schema({
    roleId: {
        type: Number, 
        required: true, 
        null: false
    },
    name: {
        type: String, 
        required: true,
        null: false
    },
    permissions: {
        type: Array, 
        required: true, 
        null: false
    }
});

const RoleModel = mongoose.model('Roles', roleSchema)
module.exports = {RoleModel}
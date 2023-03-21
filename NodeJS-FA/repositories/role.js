const {RoleModel} = require('../models')

async function createRole(role) {
  const newrole = RoleModel.create({
    roleId: role.roleId,
    name: role.name,
    permissions: role.permissions
  })
  return role
}

async function getRoleById(id) {
  const role = RoleModel.findOne({
    roleId: id
  })
  return role
}

module.exports = {createRole, getRoleById};



const { UserModel } = require('../../models')

async function createUser(username, password, employeeNumber, roleId) {
  try {
    const newUser = UserModel.create({
      username: username,
      password: password,
      employeeNumber: employeeNumber,
      roleId: roleId
    });
    if (newUser) {
      return newUser
    }
  } catch (error) {
    return error
  }
}

async function getUserWithUserName(username) {
  try {
    const user = UserModel.findOne({
      username: username,
    });
    if (user) {
      return user
    }
  } catch (error) {
    return error
  }
}

module.exports = { createUser, getUserWithUserName };


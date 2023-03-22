const { CustomerModel, EmployeeModel } = require('../../models');
const {getRoleById} = require('../../repositories');

function permissionRequired(permission) {
  return async function (req, res, next) {
    
    const {user} = req;
    const userRole = await getRoleById(user.roleId);
    const userPermissions = userRole.permissions;

    const [resource] = permission.trim().split(':');
    const fullAccessPermission = `${resource}:FullAccess`;
    if(resource == 'Employee'){
      for (const userPerm of userPermissions) {
        if (userPerm === permission || userPerm === fullAccessPermission) 
          return next()
      }
      return next(new Error('You are not authorized to perform this action!'));
    }
    if(resource == 'Customer'){
      for (const userPerm of userPermissions) {
        if (userPerm === permission || userPerm === fullAccessPermission) {
          if(userRole.name == 'Staff'){
            let customers = await CustomerModel.find({
              salesRepEmployeeNumber: req.user.employeeNumber
            })
            req.customers = customers
            req.user.role = 'Customer'
          }
          if(userRole.name == 'Leader'){
            let employees = await EmployeeModel.find({
              employeeNumber: req.user.employeeNumber
            })
            let customers = []
            for(let i=0;i< employees.length;i++){
              let data = await CustomerModel.find({
                salesRepEmployeeNumber: req.user.employeeNumber
              })
              customers.push(data)
            }
            req.customers = customers
            req.user.role = 'Leader'
          }
          return next()
        }
      }
      return next(new Error('You are not authorized to perform this action!'));
    }

  };
}

module.exports = {permissionRequired};

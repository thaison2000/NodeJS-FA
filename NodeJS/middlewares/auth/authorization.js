const {getRoleById} = require('../../repositories');

function permissionRequired(permission) {
  return async function (req, res, next) {
    
    const {user} = req;
    const userRole = await getRoleById(user.roleId);
    const userPermissions = userRole.permissions;

    const [resource] = permission.trim().split(':');
    const fullAccessPermission = `${resource}:FullAccess`;
    for (const userPerm of userPermissions) {
      if (userPerm === permission || userPerm === fullAccessPermission) 
        return next()
    }
    return next(new Error('You are not authorized to perform this action!'));

  };
}

module.exports = {permissionRequired};

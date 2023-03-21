const {createRole} = require('../repositories')

async function createRoleController(req, res, next) {
    const { roleId, name, permissions } = req.body || {};
    const role = await createRole({ roleId, name, permissions });
    if (role) {
      res.status(200).json(role)
    } else {
      next(new Error());
    }
  }

module.exports = {createRoleController}
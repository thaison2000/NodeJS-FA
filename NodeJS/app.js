const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

const {getAllEmployeesController, createEmployeeController, updateEmployeeController, deleteEmployeeController, loginController, registerController, createRoleController} = require('./controllers');
const {authenticationRequired, permissionRequired} = require('./middlewares');
const {resFromError} = require('./utilities');
const {PERMS} = require('./constants');

// Use this middleware, so that we can access request body via req.body
app.use(express.json());
// Use this middleware, so that we can access cookies via req.cookies
app.use(cookieParser());

app.post('/register', registerController);
app.post('/login', loginController);
app.post('/addRole',createRoleController)

app.get('/employee', authenticationRequired, permissionRequired(PERMS.Employee_Read), getAllEmployeesController);
app.post('/employee', authenticationRequired, permissionRequired(PERMS.Employee_Create), createEmployeeController);
app.put('/employee/:id', authenticationRequired, permissionRequired(PERMS.Employee_Update), updateEmployeeController);
app.delete('/employee/:id', authenticationRequired, permissionRequired(PERMS.Employee_Delete), deleteEmployeeController);


// Handling all errors
app.use((err, req, res, next) => {
  res.json(resFromError(err));
});

module.exports = {app};

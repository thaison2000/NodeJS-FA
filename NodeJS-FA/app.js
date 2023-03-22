const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const { authRoute, roleRoute, employeeRoute, customerRoute } = require('./routes');

app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRoute);
app.use('/role', roleRoute);
app.use('/employee', employeeRoute);
app.use('/customer', customerRoute)

// Handling all errors
app.use((err, req, res, next) => {

  res
    .status(err.statusCode || 500)
    .json({ errorMessage: err.message || 'server error' });
});

module.exports = { app };

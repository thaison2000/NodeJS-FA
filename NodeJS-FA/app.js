const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

const { mongoEnum, msgEnum, codeEnum } = require('./constants')
const {ErrorResponse} = require('./utilities');
const { authRoute, roleRoute, employeeRoute } = require('./routes');

// Use this middleware, so that we can access request body via req.body
app.use(express.json());
// Use this middleware, so that we can access cookies via req.cookies
app.use(cookieParser());

app.use('/auth', authRoute);
app.use('/role', roleRoute);
app.use('/employee', employeeRoute);

// Handling all errors
app.use((err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Log error on dev
  // console.log(err.stack);

  // MongoDB validation failed
  if (err.name === mongoEnum.VALIDATION) {
    const message = Object.values(err.errors).map(
      (value) => value.message + " "
    );
    error = new ErrorResponse(message, codeEnum.NOT_FOUND);
  }

  // MongoDB bad ObjectID
  if (err.name === mongoEnum.CAST) {
    error = new ErrorResponse(msgEnum.DATA_NOT_FOUND, codeEnum.NOT_FOUND);
  }

  //MongoDB duplicate value key
  if (err.code === mongoEnum.DUPLICATE) {
    error = new ErrorResponse(msgEnum.DUPLICATE_VALUE, codeEnum.BAD_REQUEST);
  }

  res
    .status(error.statusCode || codeEnum.SERVER_ERROR)
    .json({ errorMessage: error.message || msgEnum.SERVER_ERROR });
});

module.exports = { app };

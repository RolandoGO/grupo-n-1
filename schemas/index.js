const { checkSchema } = require('express-validator');

const schema = checkSchema({
    firstName: {
        notEmpty: {
        errorMessage: "firstName field cannot be empty"
        }
    },
    lastName: {
      notEmpty: {
        errorMessage: "lastName field cannot be empty"
        }
    },
    email: {
      notEmpty: true,
      errorMessage: "email field cannot be empty"
    },
    password: {
      notEmpty: {
        errorMessage: "password field cannot be empty"
        }
      
    }
  })

module.exports = { schema }
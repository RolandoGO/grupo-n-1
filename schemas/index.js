const { checkSchema } = require('express-validator');

const userSchema = checkSchema({
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

  const schema = {
    userSchema,
  }

module.exports = schema
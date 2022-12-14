const { checkSchema } = require('express-validator');


//schema for user validation route
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

  //schema for auth validation route
  const authSchema = checkSchema({
    
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
    authSchema,
  }

module.exports = schema
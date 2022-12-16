const { checkSchema } = require('express-validator');


//schemas for middleware to use in validation

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


  const transactionSchema = checkSchema({
    amount: {
        notEmpty: {
        errorMessage: "amount is required"
        }
    },
    userId: {
      notEmpty: {
        errorMessage: "userId is required"
        }
    },
    categoryId: {
      notEmpty: true,
      errorMessage: "categoryId is required"
    },
    date: {
      notEmpty: {
        errorMessage: "date is required"

        }
      
    }
  })




  const schema = {
    userSchema,
    transactionSchema,
    authSchema

  }


module.exports = schema
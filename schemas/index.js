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

  }


module.exports = schema
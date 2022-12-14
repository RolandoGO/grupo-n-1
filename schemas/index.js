const { checkSchema } = require('express-validator');

const transactionSchema = checkSchema({
    user: {
      notEmpty: true,
      errorMessage: "add user id"
    },
    categorie: {
      notEmpty: true,
      errorMessage: "add categorie id"
    },
    date: {
      notEmpty: true,
      errorMessage: "date field cannot be empty"
    },
    amount: {
      notEmpty: true,
      errorMessage: "amount field cannot be empty"
    },
  })

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
  transactionSchema,
  }


module.exports = schema
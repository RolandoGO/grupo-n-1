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


module.exports = { transactionSchema }
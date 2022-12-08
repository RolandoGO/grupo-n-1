const { checkSchema } = require('express-validator');

const schema = checkSchema({
    // firstName: {
    //     notEmpty: {
    //     errorMessage: "firstName field cannot be empty"
    //     },      
    //     isString: {
    //       errorMessage: "firstName must be a string"
    //     }
    // },
    // lastName: {
    //   notEmpty: {
    //     errorMessage: "lastName field cannot be empty"
    //     },   
    //   isString: {
    //     errorMessage: "lasstName must be a string"
    //   }
    // },
    // email: {
    //   notEmpty: true,
    //   errorMessage: "email field cannot be empty"
    // },
    // password: {
    //   isLength: {
    //     options: { min: 7 },
    //     errorMessage: "Password must have at least 7 characters"
    //   }
    // }
  })

module.exports = { schema }
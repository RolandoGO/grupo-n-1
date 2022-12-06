const { checkSchema } = require('express-validator');

const schemaUser = checkSchema({
    myCustomField: {
      // Custom validators
      custom: {
        options: (value, { req, location, path }) => {
          return value + req.body.foo + location + path;
        },
      },
      // and sanitizers
      customSanitizer: {
        options: (value, { req, location, path }) => {
          let sanitizedValue;

          if (req.body.foo && location && path) {
            sanitizedValue = parseInt(value);
          } else {
            sanitizedValue = 0;
          }

          return sanitizedValue;
        },
      },
    },
    password: {
      isLength: {
        errorMessage: 'Password should be at least 7 chars long',
        // Multiple options would be expressed as an array
        options: { min: 7 },
      },
    },
    // Wildcards/dots for nested fields work as well
    'addresses.*.postalCode': {
      // Make this field optional when undefined or null
      optional: { options: { nullable: true } },
      isPostalCode: {
        options: 'US', // set postalCode locale here
      },
    },
  })

module.exports = { schemaUser }
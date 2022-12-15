const { validationResult } = require('express-validator');


//middleware for checking fields working with the schema file.
const validationMiddleware = function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()
}


module.exports = { validationMiddleware  }
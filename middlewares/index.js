const { validationResult } = require('express-validator');
const jwt = require("jsonwebtoken")
require("dotenv").config()


//middleware for checking fields working with the schema file.
const validationMiddleware = function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()
}

//jsonwebtoken method for creating encode string with the data pass to it

const jwtMiddlewareEncode = (data)=>{

  //secret key from .env file use to encode and verify
  const secretKey = process.env.SECRET_KEY
  const token = jwt.sign(data, secretKey)
  return token
}

//jsonwebtoken method for decoding encode string with the data pass to it
const jwtMiddlewareDecode = (token)=>{

  const decodeData = jwt.decode(token)
  return decodeData

}

//jsonwebtoken method for creating encode string with the data pass to it
const jwtMiddlewareVerify = (token)=>{

  //secret key from .env file use to encode and verify
  const secretKey = process.env.SECRET_KEY
  
  const verifyToken = jwt.verify(token, secretKey, (error, result)=>{

    if(error)return false

    return result
  })


}

module.exports = { validationMiddleware, jwtMiddlewareEncode, jwtMiddlewareDecode, jwtMiddlewareVerify  }
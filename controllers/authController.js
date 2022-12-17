const createHttpError = require('http-errors')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')
const {loginMiddleware }= require("../middlewares/authMiddleware")
const {jwtMiddlewareEncode} = require("../middlewares/jwt")


module.exports = {

  //Login controller
    login: catchAsync(async (req, res, next) => {

    
        try {
          const response = await loginMiddleware(req.body)
          //generatin token with middleware
          const token = jwtMiddlewareEncode(response)
          //sending token to the client in body
          endpointResponse({
            res,
            body: token,
          })
        } catch (error) {
          const httpError = createHttpError(
            error.statusCode,
            `[Error retrieving index] - [index - GET]: ${error.message}`,
          )

          
          next(httpError)
        }
      })
}
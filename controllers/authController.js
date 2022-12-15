const createHttpError = require('http-errors')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')
const {loginService }= require("../service/authService")



module.exports = {

  //Login controller
    login: catchAsync(async (req, res, next) => {

    
        try {
          const response = await loginService(req.body)
          endpointResponse({
            res,
            body: response,
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
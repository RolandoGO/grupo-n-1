const createHttpError = require('http-errors')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')
const { createUserService } = require('../service/userService')

// example of a controller. First call the service, then build the controller method
module.exports = {
  createUser: catchAsync(async (req, res, next) => {

    console.log("en create user")
    // try {
      
    //   const response = await createUserService(req.body)
      
    //   endpointResponse({
    //     res,
    //     message: `user created`,
    //     body: response,
    //   })
    // } catch (error) {
    //   console.log(error)
    //   const httpError = createHttpError(
    //     error.statusCode,
    //     `[Error retrieving index] - [index - GET]: ${error.message}`,
    //   )
    //   next(httpError)
    // }
  })

  
}

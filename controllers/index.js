const createHttpError = require('http-errors')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')
const {deleteUserService} = require("../service/userService")

// example of a controller. First call the service, then build the controller method
module.exports = {
  
  deleteUser: catchAsync(async (req, res, next) => {

    
    try {
      const response = await deleteUserService(req.params.id)
      endpointResponse({
        res,
        message: 'user deleted',
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

const createHttpError = require('http-errors')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')
const {getUsersService} = require("../service/userService")

// example of a controller. First call the service, then build the controller method
module.exports = {

  //controller to get all users 
  getUsers: catchAsync(async (req, res, next) => {

    try {
      const response = await getUsersService()
      endpointResponse({
        res,
        message: `Users retrieved successfully, there are ${response.length} users in the database`,
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

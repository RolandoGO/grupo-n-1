const createHttpError = require('http-errors')
const {User} = require("../database/models")
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')

// example of a controller. First call the service, then build the controller method
module.exports = {
  getUsers: catchAsync(async (req, res, next) => {

    try {
      const response = await User.findAll({attributes:["firstName", "lastName", "email", "createdAt"]})
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

const createHttpError = require('http-errors')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')
const {getUsersService, createUserService, getUserDataService} = require("../service/userService")


module.exports = {

//controller to create user passing the properties to the service
  createUser: catchAsync(async (req, res, next) => {

    try {
      
      const response = await createUserService(req.body)
      
      endpointResponse({
        res,
        message: `user created`,
        body: response,
      })
    } catch (error) {

      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving index] - [index - GET]: ${error.message}`,
      )
      next(httpError)
    }
}),

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
  }),
  
  //controller that passes the params id of the user to the service and then gives the response
  getUserData: catchAsync(async (req, res, next) => {

    try {
      const response = await getUserDataService(req.params.id);

      endpointResponse({
        res,
        message: `user found`,
        body: response,
      })
    } 
    catch (error) {


      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving index] - [index - GET]: ${error.message}`,
      )
      next(httpError)
    }


  
}




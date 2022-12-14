const createHttpError = require('http-errors')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')
const { getTransactionsService } = require("../service/transactionService")
const {getUsersService, createUserService, getUserDataService, updateUserService, deleteUserService} = require("../service/userService")
const {deleteTransactionService} = require("../service/transactionService")

module.exports = {
//transaction controller for getting all transactions
  getTransactions: catchAsync(async (req, res, next) => {

    try {
      const response = await getTransactionsService()
      endpointResponse({
        res,
        message: `Transactions retrieved successfully, there are ${response.length} transactions in the database`,
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
    //controller for delete transaction
  deleteTransaction: catchAsync(async (req, res, next) => {

    
    try {
      const response = await deleteTransactionService(req.params.id)
      endpointResponse({
        res,
        message: 'transaction delete successfully',
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
  
  //controller to get a singular user data
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
  }),
    
    //controller to update user
    updateUser:  catchAsync( async (req,res,next)=>{
    
      try {
  
        const response = await updateUserService(req.params.id)
  
  
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
    }),
      
      
      //controller for deleting user
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




const createHttpError = require('http-errors')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')
const { getCategoriesService, getCategoryService, createCategoryService, updateCategoryService } = require('../service/categoriesService')
const { updateTransactionService, getTransactionService, getTransactionsService, createTransactionService  } = require("../service/transactionService")
const { getUsersService, createUserService, getUserDataService, updateUserService, deleteUserService } = require("../service/userService")
const { uploadImageService } = require('../service/uploadService')


module.exports = {
  //controller that passes id and body as data to the service for update the transaction
  updateTransaction: catchAsync(async (req, res, next) => {

    const {id} =req.params
    const {body:data} = req
    
    try {
      const response = await updateTransactionService(id,data)
      endpointResponse({
        res,
        message: 'transaction update successfully',
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

//transaction controller for getting all transactions
  getTransactions: catchAsync(async (req, res, next) => {

    try {
      const response = await getTransactionsService() || ''
      endpointResponse({
        res,
        message: `Transactions retrieved successfully, there are ${response?.length} transactions in the database`,
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
  
  createTransaction: catchAsync(async (req, res, next) => {
    try {
      const response = await createTransactionService(req.body)
      endpointResponse({
        res,
        message: `Transactions created successfully`,
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creating index] - [index - POST]: ${error.message}`,
      )
      next(httpError)
    }
  }),


  getOneTransaction: catchAsync(async (req, res, next) => {

    try {
      const response = await getTransactionService(req.params.id)
      
      endpointResponse({
        res,
        message: `Transaction retrieved successfully`,
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
        message: `Users retrieved successfully, there are ${response?.length} users in the database`,
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
  updateUser: catchAsync(async (req, res, next) => {

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
  }),
  getCategories: catchAsync(async (req, res, next) => {
    try {
      const response = await getCategoriesService()  || ''
      endpointResponse({
        res,
        message: `Categories retrieved successfully, there are ${response?.length} categories in the database`,
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
  getCategory: catchAsync(async (req, res, next) => {

    try {
      const response = await getCategoryService(req.params.id);

      endpointResponse({
        res,
        message: `category found`,
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

  createCategory: catchAsync(async (req, res, next) => {
    try {
      const response = await createCategoryService(req.body)
      endpointResponse({
        res,
        message: `category created`,
        body: response,
      })
    } catch (error) {

      const httpError = createHttpError(
        error.statusCode,
        `[Error creating index] - [index - POST]: ${error.message}`,
      )
      next(httpError)
    }
  }),
  updateCategory: catchAsync(async (req, res, next) => {

    try {

      const response = await updateCategoryService(req.params.id, req.body)


      endpointResponse({
        res,
        message: `category updated`,
      })
    }

    catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error updating index] - [index - PUT]: ${error.message}`,
      )
      next(httpError) 
    }
  }),
  uploadFile: catchAsync(async (req, res, next) => {
    try {
      uploadImageService(req.file)
      endpointResponse({
        res,
        message: `Image uploaded`,
      })
    }
    catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error uploading index] - [index - POST]: ${error.message}`,
      )
      next(httpError)
    }
  }),








}




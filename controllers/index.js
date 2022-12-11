const createHttpError = require('http-errors')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')
const {deleteTransactionService} = require("../service/transactionService")

// example of a controller. First call the service, then build the controller method
module.exports = {

  
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

  

  
  

  
}

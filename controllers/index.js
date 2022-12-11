const createHttpError = require('http-errors')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')
const {updateTransactionService} = require("../service/transactionService")

// example of a controller. First call the service, then build the controller method
module.exports = {

  
  updateTransaction: catchAsync(async (req, res, next) => {

    
    try {
      const response = await updateTransactionService(req.params.id, req.body)
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

  

  
  

  
}

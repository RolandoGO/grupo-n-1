const createHttpError = require('http-errors')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')
const {updateTransactionService} = require("../service/transactionService")

// example of a controller. First call the service, then build the controller method
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

  

  
  

  
}

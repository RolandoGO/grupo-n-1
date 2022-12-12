const createHttpError = require('http-errors')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')
const { getTransactionsService } = require("../service/transactionService")

// example of a controller. First call the service, then build the controller method
module.exports = {
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
  })

  
}

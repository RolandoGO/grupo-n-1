const createHttpError = require('http-errors')
const {User} = require("../database/models")
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')

// example of a controller. First call the service, then build the controller method
module.exports = {

  getUserData: catchAsync(async (req, res, next) => {

    try {
      const response = await User.findOne({where: { id: req.params.id }});
      
      if(!response){
        const httpError = createHttpError(404, `no user whit that id found`)
        next(httpError)
        return
      }

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
  })

  
}

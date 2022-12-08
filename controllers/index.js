const createHttpError = require('http-errors')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')
const {updateUserService} = require("../service/userService")

module.exports = {
 
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
    })
  
}

const createHttpError = require('http-errors')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')
const {updateUserService} = require("../service/userService")
module.exports = {
 
  updateUser: async (req,res,next)=>{

    const response = await updateUserService(req.params.id)

  }
  
}

const {User} = require("../database/models")
const {ErrorObject} = require("../helpers/error")

module.exports ={

    updateUserService: async (id)=>{

        const user = await User.findOne({where:{id}})
        if(!user){
            throw new ErrorObject("user not found", 404)
        }
        return user

    }
}
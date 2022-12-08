const{ErrorObject} = require("../helpers/error")
const {User} = require("../database/models")

module.exports = {

    deleteUserService: async (userId)=>{

        const user = await User.findOne({where:{id:userId}})

        if(!user){
            throw new ErrorObject("user not found with that id")
        }
        
        await user.destroy()
    }
}
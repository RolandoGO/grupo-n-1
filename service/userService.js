const {User} = require("../database/models")
const {ErrorObject} = require("../helpers/error")


module.exports = {
//service for getting the user by the id, if not found throw error
    getUserDataService: async (id)=>{

        const user = await User.findOne({where: { id }});
      
        if(!response){
        throw new ErrorObject("no user found with that id", 404)
        }

        return user
    }
}
const {User} = require("../database/models")
const {ErrorObject} = require("../helpers/error")


module.exports = {

    getUserDataService: async (id)=>{

        const user = await User.findOne({where: { id }});
      
        if(!response){
        throw new ErrorObject("no user found with that id", 404)
        }

        return user
    }
}
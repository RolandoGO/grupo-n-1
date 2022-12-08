const {User} = require("../database/models")


module.exports ={
    getUsersService: async ()=>{
        const data = await User.findAll({attributes:["firstName", "lastName", "email", "createdAt"]})
        return data
    }
}
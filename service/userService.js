const {User} = require("../database/models")


module.exports ={

    //service taht returns an array of user objects whit the fields requeste, if there are no users it will be an empty array
    getUsersService: async ()=>{
        const data = await User.findAll({attributes:["firstName", "lastName", "email", "createdAt"]})
        return data
    }
}
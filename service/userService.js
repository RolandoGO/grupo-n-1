const bcrypt = require('bcrypt');
const{ErrorObject} = require("../helpers/error")
const {User} = require("../database/models")

module.exports = {

    createUserService:async (data)=>{
       
        const {email} = data
        //checking if the user EMAIL is already in the database 
        const findEmail = await User.findOne({where: {email}})

        if(findEmail){
            throw new ErrorObject("email already exist", 404) 

        }

        //hashing password
        const hashPassword = bcrypt.hashSync(data.password, 10)
        data.password = hashPassword

        //creating user with the hash password
        const response = await User.create(data)
        return response


    }
}
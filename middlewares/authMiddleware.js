const bcrypt = require("bcrypt")
const {User} = require("../database/models")
const {ErrorObject} = require("../helpers/error")

module.exports = {
//login 
    loginMiddleware:async (data)=>{

        const {password, email} = data

        //find and compare emails
        const dbUser = await User.findOne({where:{email}})

        if(!dbUser){
            throw new ErrorObject("invalid credentials", 401, {ok:false})
        }
        const dbPassword = dbUser.dataValues.password
       
        
        // compare passwords
        const passwordCompare = bcrypt.compareSync(password, dbPassword)

        
        if(!passwordCompare){
            throw new ErrorObject("invalid credentials", 401, {ok:false})

        }
//in case of successfull compareson return user
        return dbUser.dataValues
    }
}
const bcrypt = require("bcrypt")
const {User} = require("../database/models")
const {ErrorObject} = require("../helpers/error")

module.exports = {
//login service
    loginService:async (data)=>{

        const {password, email} = data

        //find email and compare
        const dbUser = await User.findOne({where:{email}})

        if(!findEmail){
            throw new ErrorObject("invalid credentials", 400)
        }
        
        //compare passwords
        const passwordCompare = bcrypt.compare(password, dbUser.password, function(err, result) {
            if (err) {
                //en caso de error devolver {ok:false}
                return {ok:false}
            }

            //en caso de exito devolver al usuario
            return dbUser

        });

        return passwordCompare
        

        
    }
}
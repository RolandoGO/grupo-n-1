const {User} = require("../database/models")
const {ErrorObject} = require("../helpers/error")
const bcrypt = require('bcrypt');


module.exports = {
//service for getting the user by the id, if not found throw error
    getUserDataService: async (id)=>{

        const user = await User.findOne({where: { id }});
      
        if(!response){
        throw new ErrorObject("no user found with that id", 404)
        }

        return user
    },
    
    //service that check email duplicate, hash password and create user
    
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

    },
    
    //service that returns an array of user objects whit the fields requeste, if there are no users it will be an empty array
    getUsersService: async (page, url)=>{
        url = url.slice(0, url.length - page.toString().length);
        const limit = 10;
        const offset = page ? page * 10 : 0 * 10;
        const data = await User.findAll({
            attributes:["firstName", "lastName", "email", "createdAt"],
            limit,
            offset,
        });
        return {
                    data,
                    previousPage: page ? `${url}${Number(page) - 1}` : null,
                    nextPage: data.length < 10 ? null :`${url}${Number(page) + 1}`
                };
    },
    //update user service
     updateUserService: async (id,data)=>{

        
        const user = await User.findOne({where:{id}})
      
        if(!user){
            throw new ErrorObject("user not found", 404)
        }

        //update user here:
        await User.update(data, { where: { id } })
    },
  
    //service for deleting user
    deleteUserService: async (userId)=>{

        const user = await User.findOne({where:{id:userId}})

        if(!user){
            throw new ErrorObject("user not found with that id")
        }
        
        await user.destroy()
    }
    
    
}




   







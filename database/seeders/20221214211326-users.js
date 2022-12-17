'use strict';
const bcrypt = require('bcrypt');

//The array of fake user date is in the README.md file


//add fake users array in a constant and pass it to the function below, the return data pass it to the up method

const array1 = [
  {
  firstName: 'John',
  lastName: "Doe",
  email:"jhon@gmail.com",
  password:"123456",
  avatar:"",
  roleId:1,
  createdAt: new Date(),
  updatedAt: new Date()
  },
  {
  firstName: 'Jim',
  lastName: "Doe",
  email:"jim@gmail.com",
  password:"123456",
  avatar:"",
  roleId:1,
  createdAt: new Date(),
  updatedAt: new Date()
  },
  {
  firstName: 'Juan',
  lastName: "Caseres",
  email:"Juan@gmail.com",
  password:"123456",
  avatar:"",
  roleId:1,
  createdAt: new Date(),
  updatedAt: new Date()
  },
  {
  firstName: 'Carlos',
  lastName: "Rivas",
  email:"Carlos@gmail.com",
  password:"123456",
  avatar:"",
  roleId:1,
  createdAt: new Date(),
  updatedAt: new Date()
  },
  {
  firstName: 'Augusto',
  lastName: "Medina",
  email:"augusto@gmail.com",
  password:"123456",
  avatar:"",
  roleId:1,
  createdAt: new Date(),
  updatedAt: new Date()
  },
  {
  firstName: 'Laura',
  lastName: "Armas",
  email:"lau@gmail.com",
  password:"123456",
  avatar:"",
  roleId:1,
  createdAt: new Date(),
  updatedAt: new Date()
  },
  {
  firstName: 'Amy',
  lastName: "Huston",
  email:"amy@gmail.com",
  password:"123456",
  avatar:"",
  roleId:1,
  createdAt: new Date(),
  updatedAt: new Date()
  },
  {
  firstName: 'Alfonso',
  lastName: "Villa",
  email:"alfon@gmail.com",
  password:"123456",
  avatar:"",
  roleId:1,
  createdAt: new Date(),
  updatedAt: new Date()
  },
  {
  firstName: 'Ezequiel',
  lastName: "Perelli",
  email:"Ep@gmail.com",
  password:"123456",
  avatar:"",
  roleId:1,
  createdAt: new Date(),
  updatedAt: new Date()
  },
  {
  firstName: 'Norma',
  lastName: "Ojeda",
  email:"normaO@gmail.com",
  password:"123456",
  avatar:"",
  roleId:1,
  createdAt: new Date(),
  updatedAt: new Date()
  },
  {
  firstName: 'Sven',
  lastName: "Gurter",
  email:"svn@gmail.com",
  password:"123456",
  avatar:"",
  roleId:2,
  createdAt: new Date(),
  updatedAt: new Date()
  },
  {
  firstName: 'Sunheo',
  lastName: "Song",
  email:"ss@gmail.com",
  password:"123456",
  avatar:"",
  roleId:2,
  createdAt: new Date(),
  updatedAt: new Date()
  },
  {
  firstName: 'Gabriel',
  lastName: "Torres",
  email:"gabrres@gmail.com",
  password:"123456",
  avatar:"",
  roleId:2,
  createdAt: new Date(),
  updatedAt: new Date()
  },
  {
  firstName: 'Gabriela',
  lastName: "Malagas",
  email:"GabyM@gmail.com",
  password:"123456",
  avatar:"",
  roleId:2,
  createdAt: new Date(),
  updatedAt: new Date()
  },
  {
  firstName: 'Dimitry',
  lastName: "Stroff",
  email:"Dstroff@gmail.com",
  password:"123456",
  avatar:"",
  roleId:2,
  createdAt: new Date(),
  updatedAt: new Date()
  },
  {
  firstName: 'Lucia',
  lastName: "Kim",
  email:"Lucia@gmail.com",
  password:"123456",
  avatar:"",
  roleId:2,
  createdAt: new Date(),
  updatedAt: new Date()
  },
  {
  firstName: 'Magaly',
  lastName: "Contreras",
  email:"Mc@gmail.com",
  password:"123456",
  avatar:"",
  roleId:2,
  createdAt: new Date(),
  updatedAt: new Date()
  },
  {
  firstName: 'Carry',
  lastName: "Teder",
  email:"teder@gmail.com",
  password:"123456",
  avatar:"",
  roleId:2,
  createdAt: new Date(),
  updatedAt: new Date()
  },
  {
  firstName: 'Luis',
  lastName: "Gomez",
  email:"luisG@gmail.com",
  password:"123456",
  avatar:"",
  roleId:2,
  createdAt: new Date(),
  updatedAt: new Date()
  },
  {
  firstName: 'Enrique',
  lastName: "Armas",
  email:"enrique@gmail.com",
  password:"123456",
  avatar:"",
  roleId:2,
  createdAt: new Date(),
  updatedAt: new Date()
  }
  ]
  
//function for hashing passwords in the fake user data array.
function fakePasswordEncrypt(array){
    
  const newArrray = array.map((obj)=>{
     obj.password = bcrypt.hashSync(obj.password, 10)
     return obj

   })
   return newArrray
 }

 //Example:

 const userArray = fakePasswordEncrypt(array1)

//seeder for populating the users table whit the fake user data
//warning: You have to populate the roles table for before the users, and use the id of the roles for the users fake data in roleId propertie.
module.exports = {

  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.bulkInsert('Users', userArray, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('Users', null, {});
     
  }
};

'use strict';
const bcrypt = require('bcrypt');

//The array of fake user date is in the README.md file


//add fake users array in a constant and pass it to the function below, the return data pass it to the up method

//EXAMPLE: const fakeArr = .... users array in readme.md
  
//function for hashing passwords in the fake user data array.
function fakePasswordEncrypt(array){
    
  const newArrray = array.map((obj)=>{
     obj.password = bcrypt.hashSync(obj.password, 10)
     return obj

   })
   return newArrray
 }

 //add the fake array const in as a parameter in fakePasswordEncrypt(fakeArr)
 
 //Example: const usersArray =  fakePasswordEncrypt(fakeArr)

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

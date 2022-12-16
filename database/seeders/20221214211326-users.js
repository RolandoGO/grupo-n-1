'use strict';
const bcrypt = require('bcrypt');

//The array of fake user date is in the README.md file
//function for hashing passwords in the fake user data array.
function fakePasswordEncrypt(array){
    
  const newArrray = array.map((obj)=>{
     obj.password = bcrypt.hashSync(obj.password, 10)
     return obj

   })
   return newArrray
 }

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

'use strict';
const {hashUserArray: userArray} = require("../fakeDataSeeders")


//seeder for populating the users table whit the fake data
//warning: You have to populate the roles table for before the users, and use the id of the roles for the users fake data in roleId propertie.
module.exports = {

  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.bulkInsert('Users', userArray, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('Users', null, {});
     
  }
};

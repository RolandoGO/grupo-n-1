'use strict';

const rolesArray = [
  {
    name: 'admin',
    description:"admin privilege",
    createdAt: new Date(),
    updatedAt: new Date()
 },
 {
  name: 'client',
  description:"client privilege",
  createdAt: new Date(),
  updatedAt: new Date()
}

]

module.exports = {

  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkInsert('Roles', rolesArray, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('Roles', null, {});
     
  }
};

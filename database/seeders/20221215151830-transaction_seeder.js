'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('Transactions', [
        {
          description:"salario",
          amount:120000,
          userId:1,
          categoryId:2,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description:"salario",
          amount:120000,
          userId:2,
          categoryId:2,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        }
    
    
    ], {});
   
  },

  down: async (queryInterface, Sequelize) => {
  
     await queryInterface.bulkDelete('Transactions', null, {});
     
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    
     await queryInterface.bulkInsert('Categories', [
      {
        name: 'outcomes',
        description: "money outcomes",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'incomes',
        description: "money incomes",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('Categories', null, {});
     
  }
};

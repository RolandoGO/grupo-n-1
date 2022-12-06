'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transaction.belongsTo(models.User,{
        foreignKey:"id"
      })
    }
  };
  Transaction.init({

    description:DataTypes.STRING,
    

    amount: {
      type:DataTypes.FLOAT,
      allowNull:false},

    userId: {
      type:DataTypes.INTEGER,
      allowNull:false},

    categoryId: {
      type:DataTypes.INTEGER,
      allowNull:false},

    date:{
      type:DataTypes.DATE,
      allowNull:false},
  }, {
    sequelize,
    modelName: 'Transaction',
    paranoid:true,
    timestamps:true
  });
  return Transaction;
};
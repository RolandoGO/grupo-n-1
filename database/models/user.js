'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      User.belongsTo(models.Role,{
        foreignKey:"id"
      })
      
      User.hasMany(models.Transaction, {
        foreignKey:"userId"
      })
        
    }
  };
  User.init({
    firstName: {
      type:DataTypes.STRING,
      allowNull:false},
    lastName: {
      type:DataTypes.STRING,
      allowNull:false},
    email: {
      type:DataTypes.STRING,
      unique:true,
      allowNull:false},
    password: {
      type:DataTypes.STRING,
      allowNull:false},
    avatar: {
      type:DataTypes.STRING
      },
    RoleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
    paranoid:true,
    timestamps:true
  });
  return User;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model { }

  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
    underscored: false,
  });

  User.associate = ({ Accounts }) => {
    User.hasMany(Accounts, { foreignKey: 'user_id', as: 'accounts' });
  }
  return User;
};
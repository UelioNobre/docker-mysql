'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Accounts extends Model { }

  Accounts.init({
    user_id: DataTypes.INTEGER,
    document: DataTypes.STRING,
    document_type: {
      type: DataTypes.STRING,
      validate: {
        isIn: {
          args: [['cnpj', 'cpf']],
          msg: "Only CPF or CPNJ documents"
        },
      }
    },
    status: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Accounts',
    underscored: false,
    timestamps: false
  });

  Accounts.associate = ({ User }) => {
    Accounts.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
  }

  return Accounts;
};
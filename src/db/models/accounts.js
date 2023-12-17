// src/db/models/accounts.js
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class AccountModel extends Model { }

  AccountModel.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      document: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      document_type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: {
            args: [['cnpj', 'cpf']],
            msg: "Only CPF or CPNJ documents",
          },
        },
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Accounts',
      underscored: false,
      timestamps: false,
    }
  );

  AccountModel.associate = ({ User }) => {
    AccountModel.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
  };

  return AccountModel;
};

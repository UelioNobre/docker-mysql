// src/models/account.model.js
const { Accounts } = require('../db/models');

async function allAccountsByUserID(user_id) {
  const account = await Accounts.findAll({ where: { user_id } });

  if (account.length === 0) return [];

  const accounts = account.map(({ dataValues }) => dataValues);
  return accounts;
}

module.exports = {
  allAccountsByUserID
}

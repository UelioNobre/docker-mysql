const accountModel = require('../models/account.model');

async function listAllAccountsFromUser(userId) {
  try {
    const accounts = await accountModel.allAccountsByUserID(userId);

    if (accounts.length === 0) return { statusCode: 404, message: [] };

    return { statusCode: 200, message: accounts };

  } catch (error) {
    return {
      statusCode: 500,
      message: 'Ops! Parece que estamos com problemas para acessar nossos serviços no momento. Tente novamente em alguns minutos.'
    };
  }
}

module.exports = {
  listAllAccountsFromUser,
}

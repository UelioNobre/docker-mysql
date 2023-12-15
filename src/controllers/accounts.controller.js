const { Accounts, User } = require('../db/models');

async function listAllAccountsFromUser(req, res) {
  const account = await Accounts.findAll({ where: { user_id: req.user.id } }, {
    include: {
      model: User,
      as: 'user',
      attributes: ['user_id'],
      through: { attributes: [] },
    }
  });

  return res.status(200).json(account);
}

async function readAccountFromUser(req, res) {
  const { id } = req.params;
  const account = await Accounts.findByPk(id);
  return res.status(200).json(account);
}

async function updateAccountFromUser(req, res) {
  const { id } = req.params;
  const { body } = req;

  const [account] = await Accounts.update(
    { ...body },
    { where: { id } }
  );

  // Se foi atualizado com sucesso
  if (account === 1) {
    return res.status(202).json(account);
  }

  // Nada foi atualizado
  return res.status(204).json(account);
}

async function deleteAccountFromUser(req, res) {
  const { id } = req.params;
  const account = await Accounts.destroy(
    { where: { id } }
  );

  console.log('deleteAccountFromUser', typeof account, account, { id });
  if (account === 1) {
    return res.status(202).end();
  }

  return res.status(204).json({ message: 'Account not found' });
}

async function createAccountFromUser(req, res) {
  const { id } = req.user;
  const { body } = req;
  const { dataValues: account } = await Accounts.create({ ...body, user_id: id });

  return res.status(200).json(account);
}

module.exports = {
  listAllAccountsFromUser,
  readAccountFromUser,
  updateAccountFromUser,
  deleteAccountFromUser,
  createAccountFromUser,
}
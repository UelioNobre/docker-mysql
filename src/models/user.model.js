const { User } = require('../db/models/')
const userErrorMessages = require('../utils/errors/user.error.messages')

async function createNewUser({ name, email, password }) {
  const { id } = await User.create({ name, email, password })
  return { id, name, email }
}

async function readOneUser({ id }) {
  const attributes = ['id', 'name', 'email', 'createdAt'];
  const result = await User.findByPk(id, { attributes });

  if (!result) userErrorMessages.notFound();

  return result.dataValues
}

async function updateUser({ id, name, email, password }) {
  await readOneUser({ id });

  const where = { id }
  await User.update(
    { name, email, password },
    { where }
  );

  return { id, name, email, password };
}

async function deleteOneUser({ id }) {
  await readOneUser({ id });
  await User.destroy({ where: { id } });
}

async function findByEmailAndPassword(userEmail, userPassword) {
  const where = { email: userEmail };
  const attributes = ['id', 'name', 'email', 'password'];
  const result = await User.findOne({ where, attributes });

  if (!result) {
    userErrorMessages.notFound();
  }

  if (result.dataValues.password !== userPassword) {
    userErrorMessages.wrongEmailOrPassword();
  }

  const { id, name, email } = result.dataValues;
  return { id, name, email };
}

module.exports = {
  createNewUser,
  readOneUser,
  updateUser,
  deleteOneUser,
  findByEmailAndPassword,
};

const { User } = require('../db/models/')
const userErrorMessages = require('../utils/errors/user.error.messages')

async function createNewUser({ name, email, password }) {
  const { id } = await User.create({ name, email, password })
  return { id, name, email }
}

async function readOneUser({ id }) {
  const { dataValues } = await User.findByPk(id, {
    attributes: ['id', 'name', 'email', 'createdAt']
  })

  return dataValues
}

async function updateUser({ id, name, email, password }) {
  const userDB = await User.update({
    name, email, password
  }, {
    where: { id }
  })

  return userDB
}

async function deleteOneUser({ id }) {
  await User.destroy({ where: { id } })
}

async function findByEmailAndPassword(userEmail, userPassword) {
  const where = { email: userEmail };
  const attributes = ['id', 'name', 'email', 'password'];
  const result = await User.findOne({ where, attributes });

  if (!result || result.dataValues.password !== userPassword) {
    throw new Error("Not found", { cause: userErrorMessages.userNotFound() });
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

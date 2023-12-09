const { User } = require('../db/models/')

const createNewUser = async ({ name, email, password }) => {
  const { id } = await User.create({ name, email, password })

  return { id, name, email }
}

const readOneUser = async ({ id }) => {
  const { dataValues } = await User.findByPk(id, {
    attributes: ['id', 'name', 'email', 'createdAt']
  })

  return dataValues
}

const updateUser = async ({ id, name, email, password }) => {
  const userDB = await User.update({
    name, email, password
  }, {
    where: { id }
  })

  return userDB
}

const deleteOneUser = async ({ id }) => {
  await User.destroy({ where: { id } })
}

module.exports = {
  createNewUser,
  readOneUser,
  updateUser,
  deleteOneUser
}

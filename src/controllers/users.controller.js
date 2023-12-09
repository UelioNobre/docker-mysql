const userModel = require('../models/user.model')

const create = async (req, res) => {
  const { name, email, password } = req.body
  const { id } = await userModel.createNewUser({ name, email, password })

  return res.status(201).json({ id, name, email })
}

const read = async (req, res) => {
  const { id } = req.params
  const user = await userModel.readOneUser({ id })

  return res.status(200).json(user)
};

const update = async (req, res) => {
  const { id } = req.params
  const { name, email, password } = req.body
  const user = await userModel.updateUser({ id, name, email, password })

  return res
    .status(204)
    .json(user)
}

const destroy = async (req, res) => {
  const { id } = req.params
  await userModel.deleteOneUser({ id })

  return res.status(204).end()
}

module.exports = {
  create,
  read,
  update,
  destroy,
}

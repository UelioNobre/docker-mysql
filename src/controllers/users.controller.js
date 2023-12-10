
const userService = require('../services/user.service');

/**
 * @param {import('express').Request} req - Objeto de requisição do Express
 * @param {import('express').Response} res - Objeto de resposta do Express
 * @param {import('express').NextFunction} next - Objeto de resposta do Express
 */
async function create(req, res) {
  const { code, message } = await userService.createUser(req.body);

  return res.status(code).json(message);
}

const read = async (req, res) => {
  const { id } = req.user;
  const { code, message } = await userService.readUser({ id });
  return res.status(code).json(message);
};

const update = async (req, res) => {
  const { id } = req.user;
  const { name, email, password } = req.body;
  const { code, message } = await userService.updateUser({ id, name, email, password });

  return res
    .status(code)
    .json(message)
}

const destroy = async (req, res) => {
  const { id } = req.user;
  await userService.destroyUser({ id })

  return res.status(204).end()
}

module.exports = {
  create,
  read,
  update,
  destroy,
}

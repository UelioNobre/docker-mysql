const loginService = require('../services/login.service')

/**
 * @param {import('express').Request} req - Objeto de requisição do Express
 * @param {import('express').Response} res - Objeto de resposta do Express
 * @param {import('express').NextFunction} next - Objeto de resposta do Express
 */
async function signin(req, res, next) {
  try {
    const { email, password } = req.body
    const { code, message } = await loginService.signin(email, password)
    return res.status(code).json({ message })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  signin,
}

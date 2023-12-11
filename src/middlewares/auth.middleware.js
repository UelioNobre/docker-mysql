const tokenService = require('../services/token.service');
const tokenError = require('../utils/errors/token.error.messages');

/**
 * @param {import('express').Request} req - Objeto de requisição do Express
 * @param {import('express').Response} res - Objeto de resposta do Express
 * @param {import('express').NextFunction} next - Objeto de resposta do Express
 */
async function checkAuth(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) tokenError.unauthorizedAccess();

  try {
    const reqToken = authorization.replace("Bearer ", "");
    const token = await tokenService.verify(reqToken)
    req.user = token;
  } catch (_error) {
    tokenError.invalidToken();
  }

  next();
}

module.exports = {
  checkAuth,
}

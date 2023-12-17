/**
 * @param {Error} error - Objeto de erro.
 * @param {import('express').Request} req - Objeto de requisição do Express
 * @param {import('express').Response} res - Objeto de resposta do Express
 * @param {import('express').NextFunction} next - Objeto de resposta do Express
 */
function errorHandler(error, _req, res, next) {
  if (error.cause) {
    const { statusCode, message } = error.cause;
    return res.status(statusCode).json({ message });
  }

  return res.status(500).json({ message: error.message })
}

module.exports = { errorHandler }

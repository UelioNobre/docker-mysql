/**
 * @param {Error} error - Objeto de erro.
 * @param {import('express').Request} req - Objeto de requisição do Express
 * @param {import('express').Response} res - Objeto de resposta do Express
 * @param {import('express').NextFunction} next - Objeto de resposta do Express
 */
function errorHandler(error, _req, res, next) {
  console.log(error)
  if (error.cause) {
    const { code, message } = JSON.parse(error.cause)
    return res.status(code).json({ message });
  }

  return res.status(500).json({ message: error.message })
}

module.exports = { errorHandler }

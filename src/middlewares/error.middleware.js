/**
 * @param {Error} error - Objeto de erro.
 * @param {import('express').Request} req - Objeto de requisição do Express
 * @param {import('express').Response} res - Objeto de resposta do Express
 * @param {import('express').NextFunction} next - Objeto de resposta do Express
 */
function errorHandler(error, _req, res, next) {

  console.log('__________MiddlewarDeError__________');
  console.log(error);
  console.log('__________MiddlewarDeError__________');

  if (error.cause) {
    const { code, message } = error.cause;
    return res.status(code).json({ message });
  }

  return res.status(500).json({ message: error.message })
}

module.exports = { errorHandler }

const Validator = require('./validators/validator');
const {
  ValidateEmail,
  ValidatePassword
} = require('./validators/schemas');


/**
 * @param {import('express').Request} req - Objeto de requisição do Express
 * @param {import('express').Response} res - Objeto de resposta do Express
 * @param {import('express').NextFunction} next - Objeto de resposta do Express
 */
async function validateRequestLogin(req, res, next) {
  const validator = new Validator(req.body);
  validator.addValidation(new ValidateEmail());
  validator.addValidation(new ValidatePassword());
  validator.run();
  next();
}

module.exports = {
  validateRequestLogin,
}

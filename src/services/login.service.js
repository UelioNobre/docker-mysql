const { validateEmailPassword } = require('../middlewares/validations/auth.validation')
const tokenService = require('../services/token.service')
const userService = require('../services/user.service')

async function signin(email, password) {
  try {
    await validateEmailPassword({ email, password });
    const user = await userService.findByEmailAndPassword(email, password)
    const token = tokenService.generate(user.message)
    return token
  } catch (error) {
    throw error
  }
}

module.exports = {
  signin
}

const tokenService = require('../services/token.service')
const userService = require('../services/user.service')

async function signin(userEmail, userPassword) {
  try {
    const user = await userService.findByEmailAndPassword(userEmail, userPassword)
    const token = tokenService.generate(user.message)
    return token
  } catch (error) {
    next(error)
  }
}

module.exports = {
  signin
}

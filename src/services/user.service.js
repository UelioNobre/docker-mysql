
const userModel = require('../models/user.model')

async function findByEmailAndPassword(email, password) {
  try {
    const user = await userModel.findByEmailAndPassword(email, password);
    return {
      code: 200,
      message: user
    }
  } catch (error) {
    throw error
  }
}

module.exports = {
  findByEmailAndPassword
}
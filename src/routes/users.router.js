const Router = require('express')
const { mockUser } = require('../../mocks/user.mock')
const { User } = require('../db/models')

const router = Router()

router.post('/', async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ where: { email } })

  if (!user) {
    throw Error("user not found")
  }

  if (user.dataValues.password !== password) {
    throw Error("email/password not found")
  }

  return res.status(200).json(user)
})

module.exports = router
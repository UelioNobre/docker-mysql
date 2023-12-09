const Router = require('express')

const router = Router()
const usersController = require('../controllers/users.controller')

router.post('/', usersController.findByEmailAndPassword)

module.exports = router
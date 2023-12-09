const Router = require('express')
const router = Router()
const usersController = require('../controllers/users.controller')

router.post('/', usersController.create)
router.put('/:id', usersController.update)
router.get('/:id', usersController.read)
router.delete('/:id', usersController.destroy)

module.exports = router
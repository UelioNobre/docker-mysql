const Router = require('express')
const router = Router()
const usersController = require('../controllers/users.controller')
const authMiddleware = require('../middlewares/auth.middleware')

router.post('/', usersController.create);

router.use(authMiddleware.checkAuth);
router.get('/', usersController.read);
router.put('/', usersController.update)
router.delete('/', usersController.destroy)

module.exports = router
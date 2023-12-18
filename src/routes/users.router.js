const { Router } = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const usersController = require('../controllers/users.controller');
const userMiddleware = require('../middlewares/user.middleware');
const router = Router();

router.post('/',
  userMiddleware.validateRequestCreateOrUpdate,
  usersController.create
);

router.use(authMiddleware.checkAuth);
router.get('/', usersController.read);
router.put('/',
  userMiddleware.validateRequestCreateOrUpdate,
  usersController.update
)
router.delete('/', usersController.destroy)

module.exports = router
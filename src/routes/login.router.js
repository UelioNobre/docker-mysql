const Router = require('express')

const router = Router()
const loginController = require('../controllers/login.controller');
const loginMiddleware = require('../middlewares/login.middleware');

router.post('/',
  loginMiddleware.validateRequestLogin,
  loginController.signin)

module.exports = router
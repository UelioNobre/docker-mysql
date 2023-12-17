const Router = require('express')
const accountController = require('../controllers/accounts.controller');
const { checkAuth } = require('../middlewares/auth.middleware');

const router = Router()

router.use(checkAuth)

router.get('/', accountController.listAllAccountsFromUser);
router.post('/', accountController.createAccountFromUser);
router.get('/:id', accountController.readAccountFromUser);
router.put('/:id', accountController.updateAccountFromUser);
router.delete('/:id', accountController.deleteAccountFromUser);

module.exports = router
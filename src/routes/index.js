const Router = require('express')
const accountsRouter = require('./accounts.router')
const cashbacksRouter = require('./cashbacks.router')
const homeRouter = require('./home.router')
const loginRouter = require('./login.router')
const paymentsRouter = require('./payments.router')
const transactionsRouter = require('./transactions.router')
const usersRouter = require('./users.router')

const router = Router()

router.use('/', homeRouter)
router.use('/accounts', accountsRouter)
router.use('/cashbacks', cashbacksRouter)
router.use('/login', loginRouter)
router.use('/payments', paymentsRouter)
router.use('/transactions', transactionsRouter)
router.use('/users', usersRouter)

module.exports = router
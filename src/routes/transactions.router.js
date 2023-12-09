const Router = require('express')
const { mockTransactions } = require('../../mocks/user.mock')

const router = Router()

router.get('/', (req, res) => res.json(mockTransactions))

module.exports = router
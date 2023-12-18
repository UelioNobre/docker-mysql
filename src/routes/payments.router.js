const { Router } = require('express')
const { mockPayments } = require('../../mocks/user.mock')

const router = Router()

router.get('/', (req, res) => res.json(mockPayments))

module.exports = router
const { Router } = require('express')
const { mockCashbacks } = require('../../mocks/user.mock')

const router = Router()

router.get('/', (req, res) => res.json(mockCashbacks))

module.exports = router
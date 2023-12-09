const Router = require('express')
const { mockAccount } = require('../../mocks/user.mock')

const router = Router()

router.get('/', (req, res) => res.json(mockAccount))

module.exports = router
const Router = require('express')
const router = new Router()

router.use('/v1', require('./v1'))

router.use('/ping', (req, res) => res.send('PING'))

module.exports = router
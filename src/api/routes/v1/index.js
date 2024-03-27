const Router = require('express')
const router = new Router()

router.use(require('./routes'))

router.use(require('./middlewares/error.middleware'))

module.exports = router
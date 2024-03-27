const Router = require('express')
const router = new Router()

const UserController = require('../../controllers/users')

router.post('/signup', UserController.signup)
router.post('/signin', UserController.signin)
router.get('/:user_id', UserController.get)
router.get('/', UserController.getAll)

module.exports = router
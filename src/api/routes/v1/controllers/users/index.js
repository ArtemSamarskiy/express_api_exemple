const UserService = require('../../services/users')
const UserDto = require('../../dtos/users')

const signup = async (req, res, next) => {
    try {
        const { username, password } = req.body

        const user = await UserService.signup({
            username,
            password
        })

        return res.status(201).json(new UserDto(user))
    } catch (e) {
        return next(e)
    }
}

const signin = async (req, res, next) => {
    try {
        const { login, password } = req.body

        const user = await UserService.signin({
            login,
            password
        })

        return res.status(200).json(new UserDto(user))
    } catch (e) {
        return next(e)
    }
}

const getAll = async (req, res, next) => {
    try {
        const users = await UserService.getAll()

        return res.status(200).json(users.map(user => new UserDto(user)))
    } catch (e) {
        return next(e)
    }
}

const get = async (req, res, next) => {
    try {
        const { user_id } = req.params

        const user = await UserService.get({
            where: { id: user_id }
        })

        return res.status(200).json(new UserDto(user))
    } catch (e) {
        return next(e)
    }
}

module.exports = {
    signup,
    signin,
    getAll,
    get
}
const UserModel = require('../../../../../database/models/user.model');
const ApiError = require('../../exceptions/api.error');

const bcrypt = require('bcrypt');

const signup = async ({ username, password }) => {
    const candidate = await UserModel.findOne({
        where: { username }
    })

    if(candidate) {
        throw ApiError.BadRequest('An account with the same name already exists')
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    return await UserModel.create({
        username,
        password: hashedPassword,
    })
}

const signin = async ({ login, password }) => {
    const candidate = await UserModel.findOne({
        where: { username: login }
    })

    if(!candidate || !await bcrypt.compare(password, candidate.password)) {
        throw ApiError.UnauthorizedError('Incorrect login or password');
    }

    return candidate
}

const getAll = async (options) => {
    return await UserModel.findAll(options)
}


const get = async (options) => {
    const user =  await UserModel.findOne(options)

    if(!user) {
        throw ApiError.NotFound('User not found')
    }

    return user
}

module.exports = {
    signup,
    signin,
    getAll,
    get
}
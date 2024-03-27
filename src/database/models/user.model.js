const Sequelize = require('../index');
const { DataTypes} = require('sequelize');

const UserModel= Sequelize.define('user', {
    id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true, unique: true },

    username: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false }
})

module.exports = UserModel
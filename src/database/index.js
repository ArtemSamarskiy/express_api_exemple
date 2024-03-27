const { Sequelize } = require('sequelize')

module.exports = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        logging: false,
        dialect: 'postgres',
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT
    }
)
require('dotenv').config()

const logger = require('./config/logger');
const sequelize = require('./database');
const Server = require('./api/server');

const { createServer } = require('http');

(async function main() {
    try {
        logger.info('Initializing ORM connection...')

        require('./database/models/user.model')

        await sequelize.authenticate().then(_ => logger.debug('sequelize authenticate'))
        await sequelize.sync({ force: true }).then(_ => logger.debug('sequelize sync'))

        // Init express server
        const app = new Server()._app
        const server = createServer(app)

        // Start express server
        server.listen(process.env.NODE_PORT);

        server.on('listening', () => {
            logger.info(`Node server is listening on port ${process.env.NODE_PORT} in ${process.env.NODE_ENV} mode`);
        });

        server.on('close', () => {
            logger.info('Node server closed');
        });
    } catch (err) {
        logger.error(err.stack);
    }
})()
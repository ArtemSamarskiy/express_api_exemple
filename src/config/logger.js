const { join } = require('path')
const { existsSync, mkdirSync } = require('fs')
const { createLogger, format, transports } = require('winston')

const logDir = 'logs'

if (!existsSync(logDir)) {
    mkdirSync(logDir);
}

const errorLog = join(logDir, 'error.log');
const combinedLog = join(logDir, 'combined.log');
const exceptionsLog = join(logDir, 'exceptions.log');

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
    transports: [
        new transports.File({
            filename: errorLog,
            level: 'error'
        }),
        new transports.File({
            filename: combinedLog
        })
    ],
    exceptionHandlers: [
        new transports.File({
            filename: exceptionsLog
        })
    ]
})

if (process.env.NODE_ENV !== 'production') {
    logger.add(
        new transports.Console({
            format: format.combine(
                format.colorize(),
                format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
            ),
            level: 'debug'
        })
    );
}

module.exports = logger
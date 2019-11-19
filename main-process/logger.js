const winston = require('winston');
const { combine, timestamp, printf } = winston.format;

const format = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}]: ${message}`
})

const logger = winston.createLogger({
    format: combine(
        timestamp({
            format: 'DD-MM-YYYY HH:mm:ss'
        }),
        format
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'log.log' })
    ]
})



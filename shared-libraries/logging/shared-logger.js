// shared-libraries/logging/shared-logger.js

const winston = require('winston');

// Configuración del logger compartido
const sharedLogger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'shared.log' })
  ]
});

module.exports = sharedLogger;

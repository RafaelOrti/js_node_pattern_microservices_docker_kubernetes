// shared-libraries/logging/formatter.js

const winston = require('winston');

// Formato personalizado para el logger
function customFormat() {
  return winston.format.printf(({ timestamp, level, message }) => {
    return `${timestamp} [${level.toUpperCase()}]: ${message}`;
  });
}

module.exports = {
  customFormat
};

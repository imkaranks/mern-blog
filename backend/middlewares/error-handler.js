const APIError = require('../error/api-error');

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  /* ===[ Mongodb Id Error ]=== */
  if (err.name === 'CastError') {
    const message = `Resource not found. Invalid: ${err.path}`;
    err = new APIError(message, 400);
  }

  /* ===[ Mongoose Duplicate Key ]=== */
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
    err = new APIError(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message
  });
}
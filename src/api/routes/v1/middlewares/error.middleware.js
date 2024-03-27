const ApiError = require('../exceptions/api.error');

module.exports = function errorHandler(err, req, res, next) {
    if (err instanceof ApiError) {
        return res.status(err.status).json({ message: err.message });
    }

    console.log(err.stack);
    return res.status(500).json({ message: 'Internal Server Error' });
};
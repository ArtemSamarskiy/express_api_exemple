module.exports = class ApiError extends Error {
    status;

    constructor(status, message) {
        super(message);

        this.status = status;
    }

    static UnauthorizedError(message = undefined) {
        return new ApiError(401, message || 'Authentication required to access resource.')
    }

    static ForbiddenError(message = undefined) {
        return new ApiError(403, message || 'The users does not have access rights to the requested resource.')
    }

    static NotFound(message = undefined) {
        return new ApiError(404, message || 'The requested resource was not found on the server.')
    }

    static BadRequest(message) {
        return new ApiError(400, message)
    }
}
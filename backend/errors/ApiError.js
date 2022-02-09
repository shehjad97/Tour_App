class ApiError extends Error {
    status
    constructor(status, message, path = '') {
        super(message)
        this.status = status
        if (path) { this.path = path }
        else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}
module.exports = ApiError
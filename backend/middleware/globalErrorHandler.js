const ApiError = require("../errors/ApiError");
const ValidationError = require("../errors/ValidationError");
const castError = require("../errors/castError");

// eslint-disable-next-line no-unused-vars
const globalErrorHandler = (error, req, res, next) => {

    let statusCode = 500;
    let message = "internal server Error"
    let errorMessages = []
    if (error instanceof ApiError) {
        statusCode = error.status;
        message,
            errorMessages = error.message ? [
                { path: req.originalUrl, message: error.message }
            ] : []
    } else if (error?.name === "CastError") {
        const structureError = castError(error)
        statusCode = structureError.statusCode
        message = structureError.message
        errorMessages = structureError.errorMessages
    } else if (error.name === 'ValidationError') {
        const structureError = ValidationError(error)
        statusCode = structureError.statusCode
        message = structureError.message
        errorMessages = structureError.errorMessages
    } else if (error instanceof Error) {
        statusCode,
            message,
            errorMessages = [
                { path: req.originalUrl, message: error.message }]
    }
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
        errorMessages,
        stack: error.stack
    })
}

module.exports = globalErrorHandler
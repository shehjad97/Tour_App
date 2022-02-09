const castError = (error) => {
    return {
        statusCode: 400,
        message: 'cast error',
        errorMessages: [
            {
                path: error.path,
                message: "invalid ID"
            }
        ],
    }
}
module.exports = castError
const sandResponse = (res, data) => {
    const response = {
        statusCode: data.statusCode,
        success: true,
        message: data.message,
        meta: data.meta,
        data: data.data
    }
    res.status(data.statusCode).json(response)
}

module.exports = sandResponse
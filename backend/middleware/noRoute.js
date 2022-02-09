const noRouteFound = (req, res) => {
    res.status(404).json({
        success: false,
        message: "internal server error",
        errorMessage: [
            {
                path: req.originalUrl,
                message: "path is not found"
            }
        ]
    })
}
module.exports = noRouteFound
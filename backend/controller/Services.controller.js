const { createService, getAllServices, getAServices, searchServices } = require("../services/services.service");
const catchAsync = require("../utils/catchAsync");
const sandResponse = require("../utils/sandResponse");

module.exports.postServices = catchAsync(
    async (req, res) => {
        const { ...service } = req.body
        const data = await createService(service)

        sandResponse(res, {
            statusCode: 200,
            success: true,
            message: "Service create successfully",
            data: data
        })
    }
)
module.exports.getServices = catchAsync(
    async (req, res) => {
        const { limit } = req.query
        const data = await getAllServices(limit)
        sandResponse(res, {
            statusCode: 200,
            success: true,
            message: "successfully get all data",
            data: data
        })
    }
)
module.exports.getAService = catchAsync(
    async (req, res) => {
        const { id } = req.params
        const data = await getAServices(id)
        sandResponse(res, {
            statusCode: 200,
            success: true,
            message: "successfully get all data",
            data: data
        })
    }
)
module.exports.searchServices = catchAsync(
    async (req, res) => {
        const data = await searchServices(req.query)
        sandResponse(res, {
            statusCode: 200,
            success: true,
            message: "successfully get  data",
            data: data
        })
    }
)
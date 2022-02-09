const userServices = require("../services/user.services");
const catchAsync = require("../utils/catchAsync");
const sandResponse = require("../utils/sandResponse");

const addUser = catchAsync(
    async (req, res) => {
        const data = await userServices.createUser({ ...req.body })
        sandResponse(res, {
            statusCode: 200,
            message: "successfully",
            data: data
        })
    }
)
const users = catchAsync(
    async (req, res) => {
        const data = await userServices.getUsers()
        sandResponse(res, {
            statusCode: 200,
            message: "user created successfully",
            data: data
        })
    }
)
const user = catchAsync(
    async (req, res) => {
        const { id } = req.params
        const data = await userServices.getUser(id)
        sandResponse(res, {
            statusCode: 200,
            message: "user find successfully",
            data: data
        })
    }
)
module.exports = {
    user, users, addUser
}
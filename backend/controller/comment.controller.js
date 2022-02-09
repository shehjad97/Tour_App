const commentServices = require("../services/comment.services");
const catchAsync = require("../utils/catchAsync");
const sandResponse = require("../utils/sandResponse");

module.exports.postComment = catchAsync(
    async (req, res) => {
        const data = await commentServices.createComment({ ...req.body })
        sandResponse(res, {
            statusCode: 200,
            success: true,
            message: "successfully post comment",
            data: data
        })
    }
)
module.exports.getCommentsById = catchAsync(
    async (req, res) => {
        const data = await commentServices.getCommentsByProducts(req.params.id)
        sandResponse(res, {
            statusCode: 200,
            success: true,
            message: "successfully get comment",
            data: data
        })
    }
)
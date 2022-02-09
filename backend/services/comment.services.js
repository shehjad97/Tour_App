const Comment = require("../model/comment.model")

module.exports.createComment = async (payload) => {

    const data = await Comment.create(payload)
    if (!data) { throw new Error("comment is not created") }

    const { productId } = payload;
    const comments = await Comment.find({ productId });
    const totalRatings = comments.reduce((sum, comment) => sum + comment.rating, 0);
    const averageRating = totalRatings / comments.length;
    await Comment.updateMany({ productId }, { averageRating });

    return data
}
module.exports.getComments = async () => await Comment.find({});

module.exports.getCommentsByProducts = async (payload) => await Comment.find({ productId: payload }).sort({ createdAt: -1 });
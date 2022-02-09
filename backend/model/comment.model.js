const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    productId: { type: String, required: true, },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
    displayName: { type: String, required: true },
    photo: { type: String, required: true },
    averageRating: { type: Number },
}, {
    timestamps: true
}
)

const Comment = mongoose.model("Comment", commentSchema)

module.exports = Comment
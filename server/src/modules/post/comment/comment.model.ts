import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Post"
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
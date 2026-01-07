import mongoose from "mongoose";

const reactionSchema = new mongoose.Schema({
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
    type: {
        type: String,
        enum: ["like", "love", "funny", "sad", "angry", "insightful", "celebrate", "support", "inspirational"],
        required: true
    }
}, { timestamps: true });

const Reaction = mongoose.model("Reaction", reactionSchema);

export default Reaction;
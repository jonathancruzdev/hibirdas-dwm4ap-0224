// Modelo de Post
import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String
    },
    body: String,
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
})


const Post = mongoose.model('Post', postSchema);

export default Post
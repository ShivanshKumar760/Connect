import mongoose from "mongoose";
import PostSchema from "../schemas/postsSchema";

const Post=mongoose.model("Posts",PostSchema);

export default Post;
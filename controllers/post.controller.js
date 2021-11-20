const { Post } = require("../models/post.model");
const { User } = require("../models/user.model");

const fetchPosts = async (req, res) => {
  try {
    const { userId } = req.user;
    const posts = await Post.find({}).populate("user");
    res.json({ success: true, posts, userId })
  } catch (error) {
    res.json({ success: false, errorMessage: error.message })
  }
}

module.exports = { fetchPosts }


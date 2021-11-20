const express = require("express");
const postRouter = express.Router();
const { fetchPosts } = require("../controllers/post.controller")

postRouter.route("/")
  .get(fetchPosts)

module.exports = postRouter;
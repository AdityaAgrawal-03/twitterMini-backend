const express = require("express");
const postRouter = express.Router();

postRouter.route("/")
  .get((req, res) => {
    res.json({ message: "posts", success: true })
  })

module.exports = postRouter;
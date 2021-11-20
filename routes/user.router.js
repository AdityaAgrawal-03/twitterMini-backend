const express = require("express");
const userRouter = express.Router();
const { getAllUsers, updateFollowingAndFollowers } = require("../controllers/user.controller")

userRouter.route("/")
  .get(getAllUsers)

userRouter.route("/:username/:target_userId")
  .post(updateFollowingAndFollowers)

module.exports = userRouter;
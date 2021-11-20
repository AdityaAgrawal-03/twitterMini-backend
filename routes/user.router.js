const express = require("express");
const userRouter = express.Router();
const { getAllUsers, updateFollowingAndFollowers, getFollowing, getUser } = require("../controllers/user.controller")

userRouter.route("/")
  .get(getAllUsers)

userRouter.route("/:username")
  .get(getUser)

userRouter.route("/:username/following")
  .get(getFollowing)

userRouter.route("/:username/:target_userId")
  .post(updateFollowingAndFollowers)

module.exports = userRouter;
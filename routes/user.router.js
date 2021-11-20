const express = require("express");
const userRouter = express.Router();
const { getAllUsers, updateFollowingAndFollowers, getFollowers } = require("../controllers/user.controller")

userRouter.route("/")
  .get(getAllUsers)

userRouter.route("/:username/following")
  .get(getFollowers)

userRouter.route("/:username/:target_userId")
  .post(updateFollowingAndFollowers)

module.exports = userRouter;
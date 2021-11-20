const { User } = require("../models/user.model");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});

    res.json({ success: true, users })
  } catch (error) {
    res.json({ success: false, errorMessage: error.message })
  }
}

const updateFollowingAndFollowers = async (req, res) => {
  try {
    const { username, target_userId } = req.params;

    const sourceUser = await User.findOne({ username: username });
    const targetUser = await User.findById(target_userId);
    
    const isInFollowing = sourceUser.following.find(userId => userId.toString() === target_userId);

    if (isInFollowing) {
      sourceUser.following.pull(target_userId);
      targetUser.followers.pull(sourceUser._id)
    } else {
      sourceUser.following.push(target_userId);
      targetUser.followers.push(sourceUser._id);
    }

    await sourceUser.save();
    await targetUser.save();

    res.json({ success: true, sourceUser, targetUser })
  } catch (error) {
    res.json({ success: false, errorMessage: error.message })
  }
}

module.exports = { getAllUsers, updateFollowingAndFollowers }
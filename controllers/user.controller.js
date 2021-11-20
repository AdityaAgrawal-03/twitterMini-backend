const { User } = require("../models/user.model");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});

    res.json({ success: true, users })
  } catch (error) {
    res.json({ success: false, errorMessage: error.message })
  }
}

// list of followers
const getFollowers = async (req, res) => {
  try {
    const { username } = req.params;
    
    const user = await User.findOne({ username: username }).populate("followers");
    

    const userFollowers = user.followers.map(({ _id, name, username }) => {
      return { _id: _id, name: name, username: username }
    })    

     res.json({ success: true, userId: user._id, userFollowers })
  } catch (error) {
    res.json({ success: false, errorMessage: error.message, error: "Error" })
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

module.exports = { getAllUsers, updateFollowingAndFollowers, getFollowers }
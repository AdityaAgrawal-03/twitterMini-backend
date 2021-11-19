const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: "Cannot add user without username",
    unique: true
  },
  email: {
    type: String,
    required: "Cannot add user without email",
  },
  password: {
    type: String,
    required: "Cannot add user without password"
  },
  followers: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
  following: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
}, {
  timestamps: true
});

const User = mongoose.model("User", UserSchema);

module.exports = { User };
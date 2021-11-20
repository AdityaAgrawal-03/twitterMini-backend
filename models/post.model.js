const mongoose = require("mongoose");
const { Schema } = mongoose;

const PostSchema = new Schema({
  user: {
    ref: "User",
    type: Schema.Types.ObjectId
  },
  content: {
    type: String,
    required: "Cannot add post without content",
    maxLength: 140
  },
  likes: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
}, {
  timestamps: true
});

const Post = mongoose.model("Post", PostSchema);

module.exports = { Post };
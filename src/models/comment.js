const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    content: { type: String, required: true },
    userEmail: { type: String },
  },
  { timestamps: true },
);

const Comment = model("Comment", commentSchema);
module.exports = Comment;

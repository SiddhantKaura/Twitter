const { Schema, model, default: mongoose } = require("mongoose");

const tweetSchema = new Schema(
  {
    content: { type: String, required: true },
    userEmail: { type: String },
    // comments: [{ content: { type: String, required: true } }],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  // If we need createdAt, updatedAt proeprties.
  { timestamps: true },
);

tweetSchema.virtual("contentWithEmail").get(function () {
  return this.content + "\n" + this.userEmail;
});

const Tweet = model("Tweet", tweetSchema);
module.exports = Tweet;

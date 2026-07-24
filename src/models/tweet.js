import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema(
  {
    content: { type: String, required: true, maxLength: 250 },
  },
  // If we need createdAt, updatedAt proeprties.
  { timestamps: true },
);

tweetSchema.virtual("contentWithEmail").get(function () {
  return this.content + "\n" + this.userEmail;
});

const Tweet = mongoose.model("Tweet", tweetSchema);
export default Tweet;

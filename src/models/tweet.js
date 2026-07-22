const { Schema, model, default: mongoose } = require("mongoose");

const tweetSchema = new Schema(
  {
    content: { type: String, required: true, maxLength: 250 },
    hashtags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Hashtag" }],
  },
  // If we need createdAt, updatedAt proeprties.
  { timestamps: true },
);

tweetSchema.virtual("contentWithEmail").get(function () {
  return this.content + "\n" + this.userEmail;
});

tweetSchema.pre("save", function (next) {
  console.log("Inside a hook");
  //   next();
});

const Tweet = model("Tweet", tweetSchema);
module.exports = Tweet;

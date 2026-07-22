const { Schema } = require("mongoose");

const hashtagSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    tweets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tweet" }],
  },
  { timestamps: true },
);

const Hashtag = model("Hashtag", hashtagSchema);
module.exports = Hashtag;

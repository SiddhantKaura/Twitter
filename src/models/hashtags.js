import mongoose, { Schema } from "mongoose";

const hashtagSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      // Unique index
      unique: true,
    },
    tweets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tweet" }],
  },
  { timestamps: true },
);

const Hashtag = mongoose.model("Hashtag", hashtagSchema);

export default Hashtag;

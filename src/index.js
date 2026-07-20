const express = require("express");
const app = express();
const connectDB = require("./config/database");

const Tweet = require("./models/tweet");
const TweetRepository = require("./repository/tweet-repository");
const Comment = require("./models/comment");

app.listen(3000, async () => {
  console.log("Server is running on port 3000");
  await connectDB();
  const repo = new TweetRepository();
  const tweets = await repo.getAll(0, 1);
  console.log(tweets[0], tweets[0].contentWithEmail);
});

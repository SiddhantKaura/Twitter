const express = require("express");
const app = express();
const connectDB = require("./config/database");

const Tweet = require("./models/tweet");
const TweetRepository = require("./repository/tweet-repository");
const Comment = require("./models/comment");

app.listen(3000, async () => {
  console.log("Server is running on port 3000");
  await connectDB();
});

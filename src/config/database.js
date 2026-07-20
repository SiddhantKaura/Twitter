const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("mongodb://localhost/twitter_dev");
  console.log("MongoDb connected");
};

module.exports = connectDB;

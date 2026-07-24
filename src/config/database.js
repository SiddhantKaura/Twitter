import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose.connect("mongodb://localhost/twitter_dev");
};

export default connectDB;

import express from "express";
import connectDB from "./config/database.js";
import apiRouter from "./routes/index.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRouter);

app.listen(3000, async () => {
  console.log("Server is running on port 3000");
  await connectDB();
});

import { TweetService } from "../services/index.js";

const create = async (req, res) => {
  try {
    const tweet = await TweetService.create(req.body);
    return res.status(201).json({ success: true, data: tweet });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

export { create };

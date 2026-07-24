import LikeService from "../services/like-service.js";

const likeService = new LikeService();
const toggle = async (req, res) => {
  try {
    const { modelId, modelType, userId } = req.query;
    await likeService.toggleLike(modelId, modelType, userId);
    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
};

export { toggle };

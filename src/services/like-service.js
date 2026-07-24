import { TweetRepository, LikeRepository } from "../repository/index.js";

class LikeService {
  constructor() {
    this.likeRepository = new LikeRepository();
    this.tweetRepository = new TweetRepository();
  }

  async toggleLike(entityId, entityType, userId) {
    // api/v1/likes/toggle?id=modelid&type=Tweet
    if (entityType == "Tweet") {
      const tweet = await this.tweetRepository.get(entityId);
      var likeable = await tweet.populate({ path: "likes" });
    } else if (entityType == "Comment") {
      //
    } else {
      throw new Error("Unknown model type");
    }

    if (!likeable) {
      return false;
    }

    console.log(likeable);
    var likeExists = await this.likeRepository.findByUserIdAndLikeable({
      onModel: entityType,
      likeable: entityId,
      user: userId,
    });
    if (likeExists) {
      likeable.likes.pull(likeExists.id);
      await likeable.save();
      await this.likeRepository.destroy(likeExists.id);
    } else {
      const newLike = await this.likeRepository.create({
        onModel: entityType,
        user: userId,
        likeable: entityId,
      });
      likeable.likes.push(newLike.id);
      await likeable.save();
    }
    return true;
  }
}

export default LikeService;

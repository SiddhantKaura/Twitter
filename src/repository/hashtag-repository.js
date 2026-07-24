import Hashtag from "../models/hashtags.js";

class HashtagRepository {
  async create(data) {
    const hashtags = await Hashtag.insertMany(data);
    return hashtags;
  }

  async find(data) {
    const existingValues = await Hashtag.find(
      { title: { $in: data } },
      { title: 1, _id: 1, tweets: 1 },
    );

    return existingValues;
  }
}

export default HashtagRepository;

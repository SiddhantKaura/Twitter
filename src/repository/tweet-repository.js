import Tweet from "../models/tweet.js";
import CrudRespository from "./crud-repository.js";

class TweetRepository extends CrudRespository {
  constructor() {
    super(Tweet);
  }

  async getWithComments(id) {
    try {
      // populate resolves all the comments references if there are any.
      // It should be the schema field and not the model.
      const tweet = await Tweet.findById(id).populate("comments").lean();
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async getAll(offset, limit) {
    try {
      const tweets = await Tweet.find().skip(offset).limit(limit);
      return tweets;
    } catch (error) {
      console.log(error);
    }
  }
}

export default TweetRepository;

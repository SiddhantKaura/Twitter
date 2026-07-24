import Tweet from "../models/tweet.js";

class TweetRepository {
  async create(data) {
    try {
      const tweet = await Tweet.create(data);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async update(id, data) {
    try {
      const tweet = await Tweet.findByIdAndUpdate(id, {
        $addToSet: { hashtags: data },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async get(id) {
    try {
      const tweet = await Tweet.findById(id);
      return tweet;
    } catch (error) {
      console.log(error);
    }
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

  async delete(id) {
    try {
      const tweet = await Tweet.deleteOne(id);
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

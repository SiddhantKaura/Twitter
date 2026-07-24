import { TweetRepository, HashtagRepository } from "../repository/index.js";

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
    this.hashtagRepository = new HashtagRepository();
  }

  async create(data) {
    console.log(data);
    const { content } = data;
    const tweet = await this.tweetRepository.create(data);
    // Extract the hashtags from tweet.
    let tags = content.match(/#[a-zA-Z0-9_]+/g);
    tags = tags.map((tag) => tag.substring(1).toLowerCase());
    const existingTags = await this.hashtagRepository.find(tags);
    const existingTagTitles = new Set(existingTags.map((tag) => tag.title));
    const tagsToBeAdded = tags
      .filter((tag) => !existingTagTitles.has(tag))
      .map((tag) => ({ title: tag, tweets: [tweet.id] }));
    const hashtags = await this.hashtagRepository.create(tagsToBeAdded);
    const tweetTagsIds = [...existingTags, ...hashtags].map((tag) => tag.id);
    await this.tweetRepository.update(tweet.id, tweetTagsIds);
    existingTags.forEach((tag) => {
      console.log(tag, " here");
      tag.tweets.push(tweet.id);
      tag.save();
    });
    return tweet;
  }
}

export default new TweetService();

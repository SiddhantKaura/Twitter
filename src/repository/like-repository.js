import Like from "../models/like.js";
import CrudRespository from "./crud-repository.js";

class LikeRepository extends CrudRespository {
  constructor() {
    super(Like);
  }

  async findByUserIdAndLikeable(data) {
    try {
      const result = await this.model.findOne(data);
      return result;
    } catch (error) {
      console.log("Error in like repository");
    }
  }
}

export default LikeRepository;

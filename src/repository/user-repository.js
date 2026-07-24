import User from "../models/user.js";
import CrudRespository from "./crud-repository.js";

class UserRepository extends CrudRespository {
  constructor() {
    super(User);
  }
}

export default UserRepository;

import UserRepository from "../repository/user-repository.js";

class UserService {
  constructor() {
    this.userRepo = new UserRepository();
  }

  async create(data) {
    try {
      const response = await this.userRepo.create(data);
      return response.id;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async get(email) {
    try {
      this.userRepo.get();
    } catch (error) {}
  }
}

export default UserService;

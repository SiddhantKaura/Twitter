import UserService from "../services/user-service.js";

const userService = new UserService();

const create = async (req, res) => {
  try {
    const userId = await userService.create(req.body);
    res
      .status(201)
      .json({ success: true, message: "User created", userId: userId });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server error" });
  }
};

export { create };

import express from "express";
import { create as createTweet } from "../../controller/tweet-controller.js";
import { create as createUser } from "../../controller/user-controller.js";
import { toggle as toggleLike } from "../../controller/like-controller.js";

const router = express.Router();

router.post("/tweets/create", createTweet);

router.post("/user/create", createUser);

router.post("/likes/toggle", toggleLike);

export default router;

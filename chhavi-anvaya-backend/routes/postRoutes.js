const express = require("express");
const router = express.Router();
const authenticateToken = require('../middleware/authenticateToken'); 

const {
  createPost,
  getPosts,
  getMyPosts,
  getFollowingUserPosts,
} = require("../controllers/postController");

router.post("/create_post", createPost);
router.get("/get_posts", authenticateToken, getPosts);
router.get("/get_my_posts", authenticateToken, getMyPosts);
router.get("/get_following_user_posts", authenticateToken, getFollowingUserPosts);

module.exports = router;

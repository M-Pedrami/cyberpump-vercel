const express = require("express");
const router = express.Router();
const {
  getUsers,
  registerUser,
  loginUser,
  getProfile,
} = require("../controllers/userControllers");
const authenticate = require("../middlewares/authMiddleware")

router.route("/signup").post(registerUser);
router.route("/login").post(loginUser);
router.route("/profile").get(authenticate, getProfile);

module.exports = router;

//adding validation to the user.route : look at recommendation folder in d/bootcamp/finalProjectRecommendations

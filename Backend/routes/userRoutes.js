const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
  logoutUser
} = require("../controllers/userControllers");
const authenticate = require("../middlewares/authMiddleware")
const upload = require("../middlewares/uploadMedia");
router.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url} ${req.body} ${req.query}`);
  next();
});

router.route("/signup").post(registerUser);
router.route("/login").post(loginUser);
router.route("/profile").get(authenticate, getProfile);
router.route("/updateprofile").post(authenticate,upload.single("avatar"), updateProfile)
router.route("/logout").post(authenticate, logoutUser)

module.exports = router;

//adding validation to the user.route : look at recommendation folder in d/bootcamp/finalProjectRecommendations

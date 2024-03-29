const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
  logoutUser,
  getUsers,
} = require("../controllers/userControllers");
const authenticate = require("../middlewares/authMiddleware");
const upload = require("../middlewares/uploadImages");
const { userWorkouts } = require("../controllers/workoutControllers");

//Logger
router.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.path} `);
  const referer = req.headers.referer || "No referer";
  console.log(`Front-end URL: ${referer}`);
  next();
});

router.route("/signup").post(registerUser);
router.route("/login").post(loginUser);
router.route("/profile").get(authenticate, getProfile);
router
  .route("/updateprofile")
  .post(authenticate, upload.single("avatar"), updateProfile);
router.route("/logout").post(authenticate, logoutUser);
router.route("/").get(getUsers);
router.route("/workouts").get(authenticate, userWorkouts);

module.exports = router;

//adding validation to the user.route : look at recommendation folder in d/bootcamp/finalProjectRecommendations

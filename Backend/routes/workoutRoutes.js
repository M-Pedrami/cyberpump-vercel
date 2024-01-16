const express = require("express");
const router = express.Router();
const {
  getWorkouts,
  createWorkout,
  getWorkout,
  deleteWorkout,
  getfilteredWorkouts
} = require("../controllers/workoutControllers");

const authenticate = require("../middlewares/authMiddleware");
const upload =  require("../middlewares/uploadMedia")

router.route("/").get(getfilteredWorkouts).post(authenticate, upload.single("thumbnail"),createWorkout);
router.route("/:id").get(getWorkout).delete(authenticate, deleteWorkout);

module.exports = router;

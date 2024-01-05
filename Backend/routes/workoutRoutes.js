const express = require("express");
const router = express.Router();
const {
  getWorkouts,
  createWorkout,
  getWorkout,
} = require("../controllers/workoutControllers");

router.route("/").get(getWorkouts).post(createWorkout);
router.route("/:id").get(getWorkout);

module.exports = router;

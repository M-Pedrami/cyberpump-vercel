const express = require("express");
const router = express.Router();
const {
  getWorkouts,
  createWorkout,
} = require("../controllers/workoutControllers");

router.route("/").get(getWorkouts).post(createWorkout);

module.exports = router;

const Workout = require("../models/workout");
const User = require("../models/user");
const Exercise = require("../models/exercise");

const createWorkout = async (req, res, next) => {
  try {
    const {
      body: { name, description, exercises, creator, thumbnail },
    } = req;
    const newWorkout = await Workout.create({
      name,
      description,
      exercises,
      creator,
      thumbnail,
    });
    res.status(201).json({ message: "new workout created", data: newWorkout });
  } catch (error) {
    next(error);
  }
};

const getWorkouts = async (req, res, next) => {
  try {
    const response = await Workout.find()
      .populate("creator")
      .populate("exercises");
    res.json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = { createWorkout, getWorkouts };

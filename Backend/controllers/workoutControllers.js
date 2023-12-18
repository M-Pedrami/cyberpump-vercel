const Workout = require("../models/workout");
const User = require("../models/user");
const Exercise = require("../models/exercise");

const createWorkout = async (req, res) => {
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
    res
      .status(500)
      .send({ message: "something went wrong creating the workout" });
    console.log("createWorkout controller", error);
  }
};

const getWorkouts = async (req, res) => {
  try {
    const response = await Workout.find()
      .populate("creator")
      .populate("exercises");
    res.json(response);
  } catch (error) {
    res
      .status(500)
      .send({ message: "something went wrong getting the workouts" });
    console.log("getWorkouts controller", error);
  }
};

module.exports = { createWorkout, getWorkouts };

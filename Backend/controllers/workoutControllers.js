const asyncHandler = require("express-async-handler");
const Workout = require("../models/workout");
const User = require("../models/user");

const createWorkout = async (req, res, next) => {
  try {
    const {
      body: { name, description, exercises, level, category, createdFor },
      user: { id: creator },
      file: {path},
    } = req;

    
    const newWorkout = await Workout.create({
      name,
      description,
      exercises,
      level,
      category,
      creator,
      thumbnail: path,
      createdFor
    });
    res.status(201).json({ message: "new workout created", data: newWorkout });
  } catch (error) {
    next(error);
  }
};

const getWorkout = asyncHandler(async (req, res) => {
  const {
    params: { id },
  } = req;
  const workout = await Workout.findById(id).populate("creator").populate("exercises");
  if (!workout) {
    res.status(404);
    throw new Error("The Workout You Are Looking For Does Not Exist");
  }
  res
    .status(200)
    .json({ message: "Workout is in the database", data: workout });
});

const getWorkouts = async (req, res, next) => {
  try {
    const workouts = await Workout.find()
      .populate("creator")
      .populate("exercises");
    res.json({ workouts });
  } catch (error) {
    next(error);
  }
};

const userWorkouts = async (req, res, next) => {
  try {
    const {id} = req.user
    const found = await Workout.find({createdFor:id});
    res.status(200).json(found)
  } catch (error) {
    console.log("CATCH/filteredExercises", error);
    next(error);
  }
};

const deleteWorkout = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const deletedWorkout = await Workout.findByIdAndDelete(id);

    if (!deletedWorkout) {
      res.status(404);
      throw new Error("Workout not found");
    }

    res.status(200).json({
      message: "Workout deleted successfully",
      data: deletedWorkout,
    });
  } catch (error) {
    next(error);
  }
};


module.exports = { createWorkout, getWorkouts, getWorkout, deleteWorkout, userWorkouts };

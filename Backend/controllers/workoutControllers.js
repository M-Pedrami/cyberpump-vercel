const asyncHandler = require("express-async-handler");
const Workout = require("../models/workout");
const User = require("../models/user");

const createWorkout = async (req, res, next) => {
  try {
    const {
      body: { name, description, exercises, level, category, createdFor },
      user: { id: creator },
      file: {path} ={}, //for scenarios where file is not provided
    } = req;
    
    const thumbnail =path ? path : null//for scenarios where file is not provided
    
    const newWorkout = await Workout.create({
      name,
      description,
      exercises,
      level,
      category,
      creator,
      thumbnail,
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

const getfilteredWorkouts = async (req, res, next) => {
  try {
    const { category, level } = req.query;
    let filter = {};

    if (category) {
      // Check if targetMuscle is a comma-separated string
      const categoryArray = category.toString().split(',');

      // Use $in operator to match exercises with any of the target muscles
      filter.category = { $in: categoryArray.map(category => new RegExp(category, 'i')) };
    }

    if (level) {
      // Check if level is a comma-separated string
      const levelsArray = level.toString().split(',');

      // Use $in operator to match exercises with any of the target muscles
      filter.level = { $in: levelsArray.map(level => new RegExp(level, 'i')) };
    }

    if (Object.keys(filter).length === 0) {
      const workouts = await Workout.find();
      return res.status(200).json({ workouts });
    }
    const workouts = await Workout.find(filter);

    if (workouts.length === 0) {
      return res
        .status(404)
        .json({ message: "No workouts found for the specified filters." });
    }

    res.status(200).json({ workouts });
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


module.exports = { createWorkout, getWorkouts, getWorkout, deleteWorkout, userWorkouts, getfilteredWorkouts };

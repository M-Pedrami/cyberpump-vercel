const Exercise = require("../models/exercise");
const User = require("../models/user");

const createExercise = async (req, res, next) => {
  try {
    const {
      body: {
        name,
        description,
        category,
        level,
        equipment,
        instructions,
        targetMuscle,
        exerciseType,
        thumbnail,
      },
      user: { id: creator },
      videos,
    } = req;

    const newExercise = await Exercise.create({
      name,
      description,
      creator,
      category,
      level,
      equipment,
      instructions,
      targetMuscle,
      exerciseType,
      video: videos,
      thumbnail,
    });
    res
      .status(201)
      .json({ message: "new exercise created", data: newExercise });
  } catch (error) {
    next(error);
  }
};

const getExercises = async (req, res, next) => {
  try {
    const exercises = await Exercise.find().populate("creator");
    res.send({ exercises });
    //changed response to exercises and the send argument to an object that includes the excercises the key/value pair within this object {exercises} = {exercises: excercises} because the key and the value have the same name
  } catch (error) {
    next(error);
  }
};

const filteredExercises = async (req, res, next) => {
  try {
    const { targetMuscle, level, equipment } = req.query;
    let filter = {};

    if (targetMuscle) {
      // Check if targetMuscle is a comma-separated string
      const targetMusclesArray = targetMuscle.toString().split(",");

      // Use $in operator to match exercises with any of the target muscles
      filter.targetMuscle = {
        $in: targetMusclesArray.map((muscle) => new RegExp(muscle, "i")),
      };
    }

    if (level) {
      // Check if level is a comma-separated string
      const levelsArray = level.toString().split(",");

      // Use $in operator to match exercises with any of the target muscles
      filter.level = {
        $in: levelsArray.map((level) => new RegExp(level, "i")),
      };
    }
    if (equipment) {
      // Check if equipment is a comma-separated string
      const equipmentsArray = equipment.toString().split(",");

      // Use $in operator to match exercises with any of the target muscles
      filter.equipment = {
        $in: equipmentsArray.map((equipment) => new RegExp(equipment, "i")),
      };
    }

    if (Object.keys(filter).length === 0) {
      const allExercises = await Exercise.find();
      return res.status(200).json({ exercises: allExercises });
    }
    const exercises = await Exercise.find(filter);

    if (exercises.length === 0) {
      return res
        .status(404)
        .json({ message: "No exercises found for the specified filters." });
    }

    res.status(200).json({ exercises });
  } catch (error) {
    console.log("CATCH/filteredExercises", error);
    next(error);
  }
};

const getExercise = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const found = await Exercise.findById(id);
    res.status(200).json(found);
  } catch (error) {
    console.log("ERROR FROM getExercise Catch Backend");
  }
};

const deleteExercise = async(req, res, next)=>{
  try {
    const {
      params: { id },
    } = req;

    const deletedExercise = await Exercise.findByIdAndDelete(id);

    if (!deletedExercise) {
      res.status(404);
      throw new Error("Exercise not found");
    }

    res.status(200).json({
      message: "Exercise deleted successfully",
      data: deletedWorkout,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { createExercise, getExercises, filteredExercises, getExercise, deleteExercise };

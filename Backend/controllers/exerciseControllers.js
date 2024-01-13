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
     videos
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
      filter.targetMuscle = { $regex: new RegExp(targetMuscle, 'i') };
    }

    if (level) {
      filter.level = { $regex: new RegExp(level, 'i') };
    }
    if (equipment) {
      filter.equipment = { $regex: new RegExp(equipment, 'i') };
    }

    if (Object.keys(filter).length === 0) {
      return res.status(400).json({ message: "Specify at least one filter parameter (targetMuscle or level)." });
    }

    const exercises = await Exercise.find(filter);

    if (exercises.length === 0) {
      return res.status(404).json({ message: "No exercises found for the specified filters." });
    }

    res.status(200).json({ exercises });
  } catch (error) {
    console.log("CATCH/filteredExercises", error);
    next(error);
  }
};

module.exports = { createExercise, getExercises, filteredExercises };



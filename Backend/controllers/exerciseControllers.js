const Exercise = require("../models/exercise");
const User = require("../models/user");

const createExercise = async (req, res, next) => {
  try {
    const {
      body: {
        name,
        description,
        creator,
        category,
        level,
        equipment,
        instructions,
        targetMuscle,
        exerciseType,
        video,
        thumbnail,
      },
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
      video,
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
    res.send({exercises});
    //changed response to exercises and the send argument to an object that includes the excercises the key/value pair within this object {exercises} = {exercises: excercises} because the key and the value have the same name
  } catch (error) {
    next(error);
  }
};

module.exports = { createExercise, getExercises };

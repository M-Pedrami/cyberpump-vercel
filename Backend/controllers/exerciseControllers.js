const Exercise = require("../models/exercise");

const createExercise = async (req, res) => {
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
        video,
        thumbnail,
      },
    } = req;
    const newExercise = await Exercise.create({
      name,
      description,
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
    res
      .status(500)
      .send({ message: "Something went wrong creating the exercise" });
    console.log("createExercise Controller", error);
  }
};

module.exports = createExercise;
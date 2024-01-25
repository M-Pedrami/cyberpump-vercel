const express = require("express");
const router = express.Router();
const {
  createExercise,
  getExercises,
  filteredExercises,
  getExercise,
  deleteExercise,
} = require("../controllers/exerciseControllers");
const authenticate = require("../middlewares/authMiddleware");
const { upload, cloudinaryUpload } = require("../middlewares/uploadVideos");

//Logger
router.use((req, res, next) => {
  console.log(
    "Exercise Path was hit");
  next();
});


//createExercise, getExercises
router
  .route("/")
  .post(authenticate, upload.array("video"), cloudinaryUpload, createExercise)
  .get(getExercises);

//Delete Exercise
router.route("/:id").delete(authenticate, deleteExercise);

//getfiltered Exercises

router.get("/filtered", filteredExercises);

//getExercise
router.get("/:id", getExercise);

module.exports = router;

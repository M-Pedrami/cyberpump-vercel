const express = require("express");
const router = express.Router();
const {
  createExercise,
  getExercises,
  filteredExercises,
  getExercise,
} = require("../controllers/exerciseControllers");
const authenticate = require("../middlewares/authMiddleware");
const { upload, cloudinaryUpload } = require("../middlewares/uploadVideos");

//Logger
router.use((req, res, next) => {
  console.log(
    `Incoming request: ${req.method} ${req.path} `
  );
  const referer = req.headers.referer || 'No referer';
  console.log(`Front-end URL: ${referer}`);
  next();
});

router
  .route("/")
  .post(authenticate, upload.array("video"), cloudinaryUpload, createExercise)
  .get(getExercises);

//filtered

router.get("/filtered", filteredExercises);

//SingleExercise
router.get("/:id", getExercise);

module.exports = router;

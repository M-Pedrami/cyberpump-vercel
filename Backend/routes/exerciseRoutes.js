const express = require("express");
const router = express.Router();
const {createExercise, getExercises,filteredExercises} = require("../controllers/exerciseControllers")
const authenticate = require("../middlewares/authMiddleware") 
const {upload, cloudinaryUpload} = require("../middlewares/uploadVideos")

//Logger
router.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url} ${req.body} ${req.query}`);
  next();
});

router.route('/').post(authenticate,upload.array("video"),cloudinaryUpload, createExercise).get(getExercises)

//filtered

router.get("/filtered", filteredExercises);




module.exports = router
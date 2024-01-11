const express = require("express");
const router = express.Router();
const {createExercise, getExercises} = require("../controllers/exerciseControllers")
const authenticate = require("../middlewares/authMiddleware") 
const {upload, cloudinaryUpload} = require("../middlewares/uploadVideos")

router.route('/').post(authenticate,upload.array("video"),cloudinaryUpload, createExercise).get(getExercises)


module.exports = router
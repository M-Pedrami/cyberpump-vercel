const express = require("express");
const router = express.Router();
const {createExercise, getExercises} = require("../controllers/exerciseControllers")

router.route('/').post(createExercise).get(getExercises)

module.exports = router
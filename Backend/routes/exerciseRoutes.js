const express = require("express");
const router = express.Router();
const {createExercise, getExercises} = require("../controllers/exerciseControllers")
const authenticate = require("../middlewares/authMiddleware") 

router.route('/').post(authenticate, createExercise).get(getExercises)

module.exports = router
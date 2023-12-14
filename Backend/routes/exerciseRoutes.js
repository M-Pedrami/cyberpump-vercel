const express = require("express");
const router = express.Router();
const createExercise = require("../controllers/exerciseControllers")

router.post('/', createExercise);

module.exports = router
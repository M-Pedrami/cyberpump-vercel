const express = require("express");
const router = express.Router();
const { getUsers, addUser } = require("../controllers/userControllers");

router.route("/").get(getUsers).post(addUser);

module.exports = router;


//adding validation to the user.route : look at recommendation folder in d/bootcamp/finalProjectRecommendations


const express = require("express");
const router = express.Router();
const { getUsers, registerUser,loginUser } = require("../controllers/userControllers");

router.route("/").get(getUsers).post(registerUser);
router.route("/login").post(loginUser)

module.exports = router;


//adding validation to the user.route : look at recommendation folder in d/bootcamp/finalProjectRecommendations


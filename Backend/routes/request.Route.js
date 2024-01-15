const express = require("express");
const authentication = require("../middlewares/authMiddleware");
const {postRequest, getRequests} = require("../controllers/requestController");
const router = express.Router();

router.route("/").get(authentication, getRequests).post(authentication, postRequest);

module.exports = router
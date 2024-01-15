const express = require("express");
const authentication = require("../middlewares/authMiddleware");
const {postRequest, getRequest} = require("../controllers/requestController");
const router = express.Router();

router.route("/").get(authentication, getRequest).post(authentication, postRequest);

module.exports = router
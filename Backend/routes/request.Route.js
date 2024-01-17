const express = require("express");
const authentication = require("../middlewares/authMiddleware");
const {postRequest, getRequests, deleteRequest} = require("../controllers/requestController");
const router = express.Router();

router.route("/").get(authentication, getRequests).post(authentication, postRequest);

//  DELETE route


router.route("/:id").delete(authentication, deleteRequest); 

module.exports = router
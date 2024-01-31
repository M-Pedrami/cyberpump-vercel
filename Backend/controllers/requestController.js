const asyncHander = require("express-async-handler");
const Request = require("../models/requests");
const User = require("../models/user")

const postRequest = asyncHander(async (req, res) => {
  const {
    body: {height, weight, age, goal, request },
  } = req;

  const id = req.user.id

  const newRequest = await Request.create({
    user: id,
    height,
    weight,
    age,
    goal,
    request,
  });
  res
    .status(201)
    .json({ message: "Request Successfully Sent", data: newRequest });
});

const getRequests = asyncHander(async (req, res) => {
  const response = await Request.find().populate("user");
  res.status(200).json(response);
});

const getRequest = asyncHander(async (req, res) => {
  const {
    Body: { id },
  } = req;
  if (!id) {
    res.status(401);
    throw new Error({ message: "Access Denied- No Token" });
  }
  const found = await Request.findOne(id);
  res.status(201).json({ message: "Request Sent Succesfully", data: found });
});

const deleteRequest = asyncHander(async (req, res) => {
  const requestId = req.params.id; // Use params to get the request ID

  if (!requestId) {
    res.status(400).json({ message: "Bad Request - Request ID is required" });
    return;
  }

  const deletedRequest = await Request.findByIdAndDelete(requestId);

  if (!deletedRequest) {
    res.status(404).json({ message: "Request not found" });
    return;
  }

  res.status(200).json({ message: "Request deleted successfully", data: deletedRequest });
});



module.exports = { postRequest, getRequest, getRequests, deleteRequest };

const asyncHander = require("express-async-handler");
const Request = require("../models/requests");
const User = require("../models/user")

const postRequest = asyncHander(async (req, res) => {
  const {
    body: { user, height, weight, age, goal, request },
  } = req;

  const newRequest = await Request.create({
    user,
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

module.exports = { postRequest, getRequest, getRequests };

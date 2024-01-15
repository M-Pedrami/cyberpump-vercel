const asyncHander = require("express-async-handler");
const Request = require("../models/requests");

const postRequest = asyncHander(async (req, res) => {
  const {
    body: { height, weight, age, goal, request },
  } = req;
  const id = req.user.id;

  if (!id) {
    res.status(401);
    throw new Error({ message: "No Acces Token-NOT AUTHORIZED" });
  }
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

const getRequest = asyncHander(async (req, res) => {
  const id = req.user.id;
  if (!id) {
    res.status(401);
    throw new Error({ message: "Access Denied- No Token" });
  }
  const found = await Request.findOne(id);
  res.status(201).json({ message: "Request Sent Succesfully", data: found });
});

module.exports = {postRequest, getRequest};

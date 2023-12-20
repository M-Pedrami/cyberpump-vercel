const User = require("../models/user");
const asyncHander = require("express-async-handler");

const getUsers = async (req, res, next) => {
  try {
    const response = await User.find();
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const addUser = asyncHander(async (req, res, next) => {
  const {
    body: { username, password, email, role, avatar },
  } = req;
  const found = await User.findOne({ email });
  if (found) {
    res.status(400);
    throw new Error(`A user already exist with email: ${email}`);
  }
  const newUser = await User.create({
    username,
    password,
    email,
    role,
    avatar,
  });
  res.json({ message: "new user created", data: newUser });
});

module.exports = { addUser, getUsers };

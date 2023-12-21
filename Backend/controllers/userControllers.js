const User = require("../models/user");
const asyncHander = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getUsers = asyncHander(async (req, res, next) => {
  const response = await User.find();
  res.json(response);
});

const registerUser = asyncHander(async (req, res, next) => {
  const {
    body: { username, password, email, role, avatar },
  } = req;

  if (!username || !password || !email) {
    res.status(404);
    throw new Error("Please complete all the required fields");
  }
  const found = await User.findOne({ email });
  if (found) {
    res.status(400);
    throw new Error(`A user already exist with email: ${email}`);
  }

  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({
    username,
    password: hash,
    email,
    role,
    avatar,
  });
  if (user) {
    res.json({
      message: "new user created",
      data: { id: user._id, email: user.email, name: user.username },
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});

const loginUser = asyncHander(async (req, res) => {
  const {
    body: { email, password },
  } = req;
  if (!email || !password) {
    res.status(400);
    throw new Error("Please provide all the fields");
  }
  const user = await User.findOne({ email });
  console.log(user)
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      message: "You are Logged In",
      data: { id: user._id, email: user.email, name: user.username },
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

module.exports = { registerUser, getUsers, loginUser };

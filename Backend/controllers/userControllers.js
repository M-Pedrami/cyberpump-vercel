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
    //creating a paylod with necessary info, signing it using jwt as a token and sending the token in the cookie to the frontend.
    const payload = { id: user._id, email: user.email, name: user.username };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "120m",
    });
    res.cookie("access_token", token, { httpOnly: true, maxAge: "36600000" });
    res.status(201).json({
      message: "new user created",
      data: { id: user._id, email: user.email, name: user.username, token },
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
  const user = await User.findOne({ email }).select("+password");
  if (user && (await bcrypt.compare(password, user.password))) {
    const payload = { id: user._id, email: user.email, name: user.username };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "300m",
    });
    res
      .cookie("access_token", token, { httpOnly: true, maxAge: "3600000" })
      .send("You are logged in");
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

const getProfile = asyncHander(async (req, res) => {
  const user = req.user;
  if (!user) {
    res.status(403);
    throw new Error("Access not Authorized");
  }
  res.send(user);
});

module.exports = { registerUser, getUsers, loginUser, getProfile };

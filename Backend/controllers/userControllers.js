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
    const payload = {
      id: user._id,
      email: user.email,
      name: user.username,
      role: user.role,
    };
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
    const payload = {
      id: user._id,
      email: user.email,
      username: user.username,
      avatar: user.avatar,
      role: user.role,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "300m",
    });
    res
      .cookie("access_token", token, {
        httpOnly: true,
        maxAge: "3600000",
        secure: true,
        sameSite: "None",
      })
      .json(payload);
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

const getProfile = asyncHander(async (req, res) => {
  const { id } = req.user;
  const user = await User.findById(id);

  res.send(user);
});

const updateProfile = asyncHander(async (req, res) => {
  const {
    //get the path from the file property created by multer middleware
    file: { path },
  } = req;
  //get the user from the req.user created by authenticate middleware
  const user = req.user;

  const updatedUser = await User.findByIdAndUpdate(
    //using the user from req.user to find the user to be update in the database
    user.id,
    { $set: { avatar: path } },
    { new: true }
  );

  res
    .status(200)
    .json({ message: "Profile update Successfully", data: updatedUser });
});

const logoutUser = (req, res) => {
  res.clearCookie("access_token");
  res.status(200).json({ message: "User Successfully Logged out" });
};

module.exports = {
  registerUser,
  getUsers,
  loginUser,
  getProfile,
  updateProfile,
  logoutUser,
};

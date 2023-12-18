const User = require("../models/user");

const getUsers = async (req, res, next) => {
  try {
    const response = await User.find();
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const addUser = async (req, res, next) => {
  try {
    const {
      body: { username, password, email, role, avatar },
    } = req;
    const found = await User.findOne({ email });
    if (found) {
      res
        .status(404)
        .send({ message: `user already exist with email: ${email}` });
      return;
    }
    const newUser = await User.create({
      username,
      password,
      email,
      role,
      avatar,
    });
    res.json({ message: "new user created", data: newUser });
  } catch (error) {
    next(error);
  }
};

module.exports = { addUser, getUsers };

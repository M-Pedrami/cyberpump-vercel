const User = require("../models/user");

const getUsers = async (req, res) => {
  try {
    const response = await User.find();
    res.json(response);
  } catch (error) {
    res.status(500).send({ message: "Something went wrong getting Users" });
    console.log("getUsers Controller", error);
  }
};

const addUser = async (req, res) => {
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
    res.status(500).send({ message: "Something went wrong adding new User" });
    console.log("getUsers Controller", error);
  }
};

module.exports = { addUser, getUsers };

const jwt = require("jsonwebtoken");
const User = require("../models/user");

const authentication = (req, res, next) => {
  try {
    const {
      cookies: { access_token: token },
    } = req;
    if (!token) {
      res.status(401);
      throw new Error("No Token-ACCESS DENIED");
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authentication;

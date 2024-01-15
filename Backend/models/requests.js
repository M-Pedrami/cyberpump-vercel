const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  height: { type: String, required: true },
  weight: { type: String, required: true },
  age: {
    type: Number,
    required: true,
    validate: {
      validator: Number.isInteger,
      message: "Age must be a whole number",
    },
  },  goal: {
    type: String,
    enum: ["Gain Muscle", "Lose Weight", "Build Strength"],
    required: true,
  },
  request: { type: String, required: true },
  created_at: {
    type: Date,
    default: Date.now,
  }
});

const Request = mongoose.model("Request", requestSchema);

module.exports = Request;

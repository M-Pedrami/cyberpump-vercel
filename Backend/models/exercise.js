const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum : ['Muscle Building', 'Strenght', 'Cardio', 'Fat Loss', 'Celebrity']
  },

  level: {
    type: String,
    required: true,
    enum : ['Advanced', 'Intermediate', 'Beginner']
  },

  equipment: {
    type: String,
    default: "None",

  },

  instructions : {
    type : [String]
  },

  targetMuscle : {
    type: String,
  },

  exerciseType : {
    type: String,
  },

  video: {
    type: String,
  },

  thumbnail: {
    type: String,
  },
  
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;

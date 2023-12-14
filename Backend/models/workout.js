const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  exercises: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Exercise',
    },
  ],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  thumbnail : {
    type: String,
  },

  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;

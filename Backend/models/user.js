const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
     select: false 
    //if active, the password will not be returned by findOne method and consquently the bcrypt.compare method will run into problems. A solution would be to add the password using select method in the controller and leave it as select false here.
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    default: 'user', 
  },
  avatar: {
    type: String
  },
  
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
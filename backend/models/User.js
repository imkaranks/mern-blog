const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: [ 4, "Username should be atleast 4 characters long" ],
    unique: [ true, "Username has been already taken" ]
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', UserSchema);
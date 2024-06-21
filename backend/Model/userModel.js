const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  dob: { 
    type: Date ,
},
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  district: {
    type: String,
  },
  qualification: {
    type: String,
  },
  professional: {
    type: String,
  },
  password: {
    type: String,
  },
  confirmPassword:{
    type:String
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const User = mongoose.model('User', userSchema);

module.exports = User;

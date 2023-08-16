const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const catchAsyncError = require('../middlewares/catch-async-error');
const APIError = require('../error/api-error');

const register = catchAsyncError(async (req, res, next) => {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({
    username,
    password: hash
  });

  res.json({
    success: true,
    user
  });
});

const login = catchAsyncError(async(req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({username});

  if (!user) {
    return next(new APIError("User not found", 404));
  }

  const isPasswdOk = await bcrypt.compare(password, user.password);

  if (isPasswdOk) {
    const token = await jwt.sign(
      { username, id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRY }
    );
    res.cookie('token', token).json({
      id: user._id,
      username
    });
  } else {
    return next(new APIError("Wrong credentials", 400));
  }
});

const logout = catchAsyncError(async (req, res, next) => {
  res.cookie('token', '').json('ok');
});

const getProfile = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;

  const decoded = await jwt.verify(token, process.env.JWT_SECRET);
  res.status(200).json(decoded);
});

module.exports = {
  register,
  login,
  logout,
  getProfile
}
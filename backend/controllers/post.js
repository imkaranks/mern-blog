const Post = require('../models/Post');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const catchAsyncError = require('../middlewares/catch-async-error');
const APIError = require('../error/api-error');

const createPost = catchAsyncError(async(req, res, next) => {
  const { originalname, path } = req.file;
  const parts = originalname.split('.');
  const ext = parts[parts.length-1];
  const newPath = `${path}.${ext}`;
  fs.renameSync(path, newPath);

  const { title, summary, content } = req.body;
  const { token } = req.cookies;
  const decoded = await jwt.verify(token, process.env.JWT_SECRET);

  const post = await Post.create({
    title,
    summary,
    content,
    author: decoded.id,
    imageUrl: newPath
  });

  res.status(201).json({
    success: true,
    post
  });
});

const getAllPosts = catchAsyncError(async (req, res, next) => {
  const posts = await Post.find()
    .populate('author', ['username'])
    .sort({ createdAt: -1 })
    .limit(20);

  res.status(200).json({
    success: true,
    posts
  });
});

const getPost = catchAsyncError(async (req, res, next) => {
  const post = await Post.findById(req.params.id)
    .populate('author', ['username']);

  if (!post) {
    return next(new APIError("Post not found", 404));
  }

  res.status(200).json({
    success: true,
    post
  });
});

const updatePost = catchAsyncError(async (req, res, next) => {
  let newPath = null;
  if (req.file) {
    const { originalname, path } = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length-1];
    newPath = `${path}.${ext}`;
    fs.renameSync(path, newPath);
  }

  const { title, summary, content } = req.body;
  const { token } = req.cookies;
  const decoded = await jwt.verify(token, process.env.JWT_SECRET);

  const post = await Post.findById(req.params.id);

  if (JSON.stringify(post.author) !== JSON.stringify(decoded.id)) {
    return next(new APIError("Wrong Author", 400));
  }
  if (!post) {
    return next(new APIError("Post not found", 404));
  }

  if (newPath && fs.existsSync(post.imageUrl)) {
    // The file exists, so you can proceed with deleting it
    try {
      fs.unlinkSync(post.imageUrl);
      console.log('File deleted successfully');
    } catch (err) {
      console.error(err);
    }
  } else {
    newPath && console.log('File not found');
  }

  await post.updateOne({
    title,
    summary,
    content,
    imageUrl: newPath ? newPath : post.imageUrl
  });

  res.status(200).json({
    success: true,
    post
  });
});

module.exports = {
  createPost,
  getAllPosts,
  getPost,
  updatePost
}
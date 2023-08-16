const express = require('express');
const multer = require('multer');
const { createPost, getAllPosts, getPost, updatePost } = require('../controllers/post');
const uploadMiddleware = multer({ dest: 'uploads/' });
const router = express.Router();

router
  .route('/new')
  .post(uploadMiddleware.single('file'), createPost);

router
  .route('/:id')
  .get(getPost)
  .put(uploadMiddleware.single('file'), updatePost);

router
  .route('/')
  .get(getAllPosts);

module.exports = router;
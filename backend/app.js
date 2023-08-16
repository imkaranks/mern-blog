const express = require('express');
const cors = require('cors');
const cookie = require('cookie-parser');
const app = express();

const userRouter = require('./routes/user');
const postRouter = require('./routes/post');
const errorHandlerMiddleware = require('./middlewares/error-handler');

app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));
app.use(express.json());
app.use(cookie());
app.use('/uploads', express.static(__dirname + '/uploads'));

app.use('/api/v1/user', userRouter);
app.use('/api/v1/posts', postRouter);

app.use(errorHandlerMiddleware);

module.exports = app;
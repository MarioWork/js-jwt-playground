require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');

const server = express();

//Middleware
server.use(express.json());
server.use(cookieParser());

server.use('/login', require('./routes/auth/login'));
server.use('/refresh', require('./routes/auth/refresh'));
server.use('/posts', require('./routes/posts/get-by-username'));

server.listen(3000);
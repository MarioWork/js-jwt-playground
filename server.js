require('dotenv').config();
const express = require('express');
const server = express();

server.use(express.json());

server.use('/login', require('./routes/auth/login'));
server.use('/refresh', require('./routes/auth/refresh'));
server.use('/posts', require('./routes/posts/get-by-username'));

server.listen(3000);
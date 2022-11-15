require('dotenv').config()
const express = require('express');
const jwt = require('jsonwebtoken');
const server = express();

server.use(express.json())

const posts = [
    {
        username: 'Kyle',
        title: 'Title 1'
    },
    {
        username: 'John',
        title: 'Title 2'
    },
]

server.get('/posts', (req, res) => {
    res.json(posts);
});

server.post('/login', (req, res) => {
    //Authenticate User

    //Serialize user
    const username = req.body.username;

    const user = { name: username };

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.json({ accessToken });
});


server.listen(3000);
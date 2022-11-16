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

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

server.get('/posts', authenticateToken, (req, res) => {
    res.json(posts.filter(({ username }) => username === req.user.name));
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
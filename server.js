require('dotenv').config()
const express = require('express');
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

server.use('/login', require('./routes/login'));


/* server.get('/posts', authenticateToken, (req, res) => {
    res.json(posts.filter(({ username }) => username === req.user.name));
});

server.post('/refresh', (req, res) => {
    const refreshToken = req.body.token;

    if (refreshToken == null) return res.sendStatus(401);

    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);

        const accessToken = generateAccessToken({ name: user.name });

        res.json({ accessToken });
    })
}); */


server.listen(3000);
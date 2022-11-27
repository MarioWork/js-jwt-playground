require('dotenv').config();
const express = require('express');
const server = express();

server.use(express.json());

server.use('/login', require('./routes/auth/login'));
server.use('/posts', require('./routes/posts/get'));




/* server.post('/refresh', (req, res) => {
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
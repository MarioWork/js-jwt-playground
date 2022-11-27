
const jwt = require('jsonwebtoken');

const generateAccessToken = require('../../utils/generate-access-token');
const refreshTokens = require('../../data/refresh-tokens');

const handleRefreshToken = (req, res) => {
    const refreshToken = req.body.token;

    if (refreshToken == null) return res.sendStatus(401);

    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);

        const accessToken = generateAccessToken({ name: user.name });

        res.json({ accessToken });
    });
}

module.exports = { handleRefreshToken };

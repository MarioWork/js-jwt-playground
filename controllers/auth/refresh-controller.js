
const jwt = require('jsonwebtoken');

const generateAccessToken = require('../../utils/generate-access-token');

const { removeRefreshToken, readRefreshTokens } = require('../../services/local-storage-tokens-service');

const handleRefreshToken = (req, res) => {
    const refreshToken = req?.cookies?.jwt;

    const refreshTokens = readRefreshTokens();

    if (!refreshToken) return res.sendStatus(401);

    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);

        const accessToken = generateAccessToken({ name: user.name });

        res.json({ accessToken });
    });

    removeRefreshToken(refreshToken);
}

module.exports = { handleRefreshToken };

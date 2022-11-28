require('dotenv').config();

const { refreshTokens, addToken } = require('../../data/refresh-tokens');

const generateAccessToken = require('../../utils/generate-access-token');
const generateRefreshAccessToken = require('../../utils/generate-refresh-access-token');

const handleLogin = (req, res) => {
    //Authenticate User

    //Serialize user
    const username = req.body.username;

    const user = { name: username };

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshAccessToken(user);

    addToken(refreshToken);

    res.json({ accessToken, refreshToken });
    console.log(refreshTokens);
}

module.exports = { handleLogin };
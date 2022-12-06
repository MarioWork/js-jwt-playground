require('dotenv').config();

const { saveRefreshToken } = require('../../services/local-storage-tokens-service');

const generateAccessToken = require('../../utils/generate-access-token');
const generateRefreshAccessToken = require('../../utils/generate-refresh-access-token');

const handleLogin = (req, res) => {
    //Serialize user
    const username = req.body.username;

    const user = { name: username };

    //should authenticate the user before

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshAccessToken(user);

    saveRefreshToken(refreshToken);

    res.cookie('jwt', refreshToken, {
        httpOnly: true
    });
    res.json({ accessToken });
}

module.exports = { handleLogin };
require('dotenv').config();

const { saveRefreshToken } = require('../../services/local-storage-tokens-service');

const generateAccessToken = require('../../utils/generate-access-token');
const generateRefreshAccessToken = require('../../utils/generate-refresh-access-token');

const handleLogin = (req, res) => {
    //Authenticate User

    //Serialize user
    const username = req.body.username;

    const user = { name: username };

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshAccessToken(user);

    saveRefreshToken(refreshToken);

    res.json({ accessToken, refreshToken });
}

module.exports = { handleLogin };
require('dotenv').config();

//Should be stored in a database
let refreshTokens = [];

const { generateAccessToken } = require('../utils/generate-access-token');
const { generateRefreshAccessToken } = require('../utils/generate-refresh-access-token');

const handleLogin = (req, res) => {
    //Authenticate User

    //Serialize user
    const username = req.body.username;

    const user = { name: username };

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshAccessToken(user);

    refreshTokens.push(refreshToken);

    res.json({ accessToken, refreshToken });

}

module.exports = { handleLogin };
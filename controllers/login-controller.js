require('dotenv').config();
const jwt = require('jsonwebtoken');

//Should be stored in a database
let refreshTokens = [];

const generateAccessToken = (user) =>
    jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s' });

const generateRefreshAccessToken = (user) => jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);


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
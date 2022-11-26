const jwt = require('jsonwebtoken');

const generateAccessToken = (user) =>
    jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s' });

module.exports = generateAccessToken;
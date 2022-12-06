const jwt = require('jsonwebtoken');

const generateRefreshAccessToken = (user) => jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "1d" });

module.exports = generateRefreshAccessToken;
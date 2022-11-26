const jwt = require('jsonwebtoken');

const generateRefreshAccessToken = (user) => jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);

module.exports = { generateRefreshAccessToken };
let refreshTokens = [];

const addToken = (token) => refreshTokens.push(token);
const removeToken = (tokenToRemove) => {
    refreshTokens = refreshTokens.filter(token => token != tokenToRemove)
}

module.exports = { refreshTokens, addToken, removeToken };
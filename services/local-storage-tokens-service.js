const fs = require('fs');

const FILE_PATH = './services/refresh-tokens.json';

const saveRefreshToken = (refreshToken) => {
    const refreshTokens = readRefreshTokens();

    refreshTokens.push(refreshToken);

    saveFile({ tokens: refreshTokens });
}

const readRefreshTokens = () => {
    return JSON.parse(fs.readFileSync(FILE_PATH, 'utf-8')).tokens;
}

const removeRefreshToken = (refreshToken) => {
    const refreshTokens = readRefreshTokens();

    newRefreshTokensArray = refreshTokens.filter((token) => token != refreshToken);

    saveFile({ tokens: newRefreshTokensArray });
}


const saveFile = (obj) => {
    fs.writeFile(FILE_PATH, JSON.stringify(obj), (_, err) => {
        if (err) {
            console.log(err);
        }
    });
}

module.exports = { saveRefreshToken, readRefreshTokens, removeRefreshToken };
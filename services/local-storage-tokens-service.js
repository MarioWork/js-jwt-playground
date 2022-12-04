const fs = require('fs');

const FILE_PATH = './services/refresh-tokens.json';

const saveRefreshToken = (refreshToken) => {
    const fileObj = readRefreshTokens();

    fileObj.tokens.push(refreshToken);

    fs.writeFile(FILE_PATH, JSON.stringify(fileObj), (_, err) => {
        if (err) {
            console.log(err);
        }
    });
}

const readRefreshTokens = () => {
    return JSON.parse(fs.readFileSync(FILE_PATH, 'utf-8'));
}

module.exports = { saveRefreshToken, readRefreshTokens };

const posts = require('../data/posts');
const getPostsByUsername = (req, res) => {
    res.json(posts?.filter(({ username }) => username === req.user.name))
};

module.exports = { getPostsByUsername };
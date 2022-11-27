const express = require('express');
const router = express.Router();

const refreshController = require('../../controllers/auth/refresh-controller');

router.post('/', refreshController.handleRefreshToken);

module.exports = router;
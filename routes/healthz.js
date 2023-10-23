const express = require('express');

const healthz = require('../controllers/healthz/healthz');

const router = express.Router();

router.post('/', healthz);

module.exports = router;

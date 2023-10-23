const express = require('express');
const ctrl = require('../controllers/user');
const ctrlWrapper = require('../utils/ctrlWrapper');

const router = express.Router();

router.post('/login', ctrlWrapper(ctrl.getUser));
router.post('/register', ctrlWrapper(ctrl.addUser));

module.exports = router;

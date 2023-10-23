const express = require('express');
const ctrl = require('../controllers/user');
const ctrlWrapper = require('../utils/ctrlWrapper');

const router = express.Router();

router.get('/', ctrlWrapper(ctrl.getUser));
router.post('/', ctrlWrapper(ctrl.addUser));

module.exports = router;

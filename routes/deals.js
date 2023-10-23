const express = require('express');
const ctrl = require('../controllers/deals');
const ctrlWrapper = require('../utils/ctrlWrapper');
const router = express.Router();

router.get('/', ctrlWrapper(ctrl.getAllDeals));

module.exports = router;

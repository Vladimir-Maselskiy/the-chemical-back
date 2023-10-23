const express = require('express');
const ctrl = require('../controllers/orders');
const ctrlWrapper = require('../utils/ctrlWrapper');

const router = express.Router();

router.get('/', ctrlWrapper(ctrl.getAllOrders));
router.post('/', ctrlWrapper(ctrl.addOrder));

module.exports = router;

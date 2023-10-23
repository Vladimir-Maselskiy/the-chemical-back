const express = require('express');
const ctrl = require('../controllers/products');
const ctrlWrapper = require('../utils/ctrlWrapper');
const router = express.Router();

router.get('/', ctrlWrapper(ctrl.getAllProducts));
router.post('/', ctrlWrapper(ctrl.addProduct));

module.exports = router;

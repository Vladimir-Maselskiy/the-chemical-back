const { Product } = require('../../models/product');

const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    next(error);
  }
};

module.exports = getAllProducts;

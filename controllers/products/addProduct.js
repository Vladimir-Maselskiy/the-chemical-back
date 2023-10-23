const { Product } = require('../../models/product');

const addProduct = async (req, res, next) => {
  try {
    const product = await Product.create({
      ...req.body,
    });
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};
module.exports = addProduct;

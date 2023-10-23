const { User } = require('../../models/user');

const addProduct = async (req, res, next) => {
  try {
    const user = await User.create({
      ...req.body,
    });
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};
module.exports = addProduct;

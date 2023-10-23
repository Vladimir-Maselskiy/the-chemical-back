const { Order } = require('../../models/order');

const getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({});
    res.json(orders);
  } catch (error) {
    next(error);
  }
  res.status(200).json(orders);
};

module.exports = getAllOrders;

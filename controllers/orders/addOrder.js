const { Order } = require('../../models/order');

const addOrder = async (req, res, next) => {
  try {
    console.log(req.body);
    const order = await Order.create({
      ...req.body,
    });
    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
};
module.exports = addOrder;

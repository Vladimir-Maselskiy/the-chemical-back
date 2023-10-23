const { Deal } = require('../../models/deal');

const getAllDeals = async (req, res, next) => {
  try {
    const deals = await Deal.find({});
    res.json(deals);
  } catch (error) {
    next(error);
  }
  res.status(200).json(deals);
};

module.exports = getAllDeals;

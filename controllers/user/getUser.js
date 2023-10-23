const { User } = require('../../models/user');

const getUser = async (req, res, next) => {
  try {
    const user = await User.find({});
    res.json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = getUser;

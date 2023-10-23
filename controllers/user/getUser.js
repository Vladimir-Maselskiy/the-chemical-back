const { User } = require('../../models/user');

const getUser = async (req, res, next) => {
  const user = req.body;
  try {
    const userFromDB = await User.find(user);
    if (!userFromDB || userFromDB.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.staus(200).json(userFromDB);
  } catch (error) {
    next(error);
  }
};

module.exports = getUser;

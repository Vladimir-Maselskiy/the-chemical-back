const { User } = require('../../models/user');

const addProduct = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({
      email,
    });
    console.log('user', user);
    if (user)
      return res.status(400).json({ error: 'This email is alredy used' });
    const newUser = await User.create({
      ...req.body,
    });
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};
module.exports = addProduct;

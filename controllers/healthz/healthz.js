const healthz = async (req, res, next) => {
  try {
    res.status(200).json({ healthz: 'OK' });
  } catch (error) {
    next(error);
  }
};

module.exports = healthz;

const jwt = require('jsonwebtoken');
const { OK, NOT_FOUND } = require('http-status');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const { SECRET_KEY } = require('../../utilities/constants');
const tokenParser = require ('../../utilities/tokenParser');

module.exports = async (req, res, next) => {
  const token = tokenParser(req);

  if (!token) return res.status(401).send('Access denied. No token provided.');

  try {
    const decoded = jwt.verify(token, SECRET_KEY);

    const { email } = decoded;
    const user = await User.find({ email });

    if (!user) {
      return res.status(400).json({ msg: 'User not found.' }).send();
    }

    req.user = decoded;
    next();
  }
  catch (ex) {
    res.status(400).send({error: 'Invalid token.'});
  }
}

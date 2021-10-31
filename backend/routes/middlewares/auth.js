const jwt = require('jsonwebtoken');
const { BAD_REQUEST, UNAUTHORIZED } = require('http-status');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const { SECRET_KEY } = require('../../utilities/constants');
const tokenParser = require ('../../utilities/tokenParser');

module.exports = async (req, res, next) => {
  const token = tokenParser(req);
  if (!token) return res.status(UNAUTHORIZED).send('Access denied. No token provided.');

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    const { email } = decoded;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(BAD_REQUEST).json({ msg: 'User not found.' }).send();
    }

    req.user = user;
    next();
  }
  catch (ex) {
    res.status(BAD_REQUEST).send({error: 'Invalid token.'});
  }
}

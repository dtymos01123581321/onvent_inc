const jwt = require('jsonwebtoken');
const md5 = require('md5');
const { OK, NOT_FOUND } = require('http-status');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const { SECRET_KEY } = require('../utilities/constants');

class Auth {
  async login(req, res) {
    const {
      email,
      password,
    } = req.body;

    const user = await User.findOne({ email, password: md5(password) });

    if (user) {
      const token = jwt.sign({
        email, _id: user._id, name: user.name
      }, SECRET_KEY, {
        expiresIn: '1h'
      });

      res.status(OK).json({ token }).send();
      return;
    }

    res.status(NOT_FOUND).json({ msg: 'User not found.' }).send();
  }
}

module.exports = new Auth();


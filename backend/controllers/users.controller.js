const { OK, FORBIDDEN } = require('http-status');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const md5 = require('md5');

const { UPLOAD_DIR } = require('../utilities/constants');

class UsersController {
  async getAll(req, res) {
    try {
      const data = await User.find({});

      res.status(OK).json(data);
    } catch (error) {
      console.error(error);
      res.status(FORBIDDEN).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.body;
      const data = await User.findOne({ id });

      res.status(OK).json(data);
    } catch (error) {
      console.error(error);
      res.status(FORBIDDEN).json({ error: error.message });
    }
  }

  async add(req, res) {
    try {
      const { body, files, _id } = req;
      body.password = md5(body.password)
      const newEvent = new User(
        { ...body, image: `${UPLOAD_DIR.replace('./', '/')}${files[0].originalname}` });

      const data =  await newEvent.save();

      res.status(OK).json({ data });
    } catch (error) {
      console.error(error);
      res.status(FORBIDDEN).json({ error: error.message });
    }
  }

  async deleteAll(req, res) {
    try {

      // res.status(OK).json(data);
    } catch (error) {
      console.error(error);
      res.status(FORBIDDEN).json({ error: error.message });
    }
  }

  async deleteById(req, res) {
    try {
      const { id } = req.query;

      // res.status(OK).json(data);
    } catch (error) {
      console.error(error);
      res.status(FORBIDDEN).json({ error: error.message });
    }
  }
}

module.exports = new UsersController();


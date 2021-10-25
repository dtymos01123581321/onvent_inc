const { OK, FORBIDDEN } = require('http-status');
const mongoose = require('mongoose');
const User = mongoose.model('User');

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
      const { id } = req.query;

      // res.status(OK).json({ data, cache: false });
    } catch (error) {
      console.error(error);
      res.status(FORBIDDEN).json({ error: error.message });
    }
  }

  async add(req, res) {
    try {
      const body = req.body;
      const newEvent = new User(body);

      const data =  await newEvent.save();

      res.status(OK).json({ data });
    } catch (error) {
      console.error(error);
      res.status(FORBIDDEN).json({ error: error.message });
    }
  }

  async deleteAll(req, res) {
    try {

      // res.status(OK).json({ data, cache: false });
    } catch (error) {
      console.error(error);
      res.status(FORBIDDEN).json({ error: error.message });
    }
  }

  async deleteById(req, res) {
    try {
      const { id } = req.query;

      // res.status(OK).json({ data, cache: false });
    } catch (error) {
      console.error(error);
      res.status(FORBIDDEN).json({ error: error.message });
    }
  }
}

module.exports = new UsersController();


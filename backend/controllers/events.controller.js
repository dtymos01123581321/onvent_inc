const { OK, FORBIDDEN } = require('http-status');
const mongoose = require('mongoose');
const Event = mongoose.model('Event');

class EventsController {
  async getAll(req, res) {
    try {
      const data = await Event.find({}).populate('user');

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
      console.log('user  --: ', req.user);
      const newEvent = new Event({ ...body, user: req.user});

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


module.exports = new EventsController();


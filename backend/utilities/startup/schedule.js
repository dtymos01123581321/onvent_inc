const cron = require('node-cron');
const mongoose = require('mongoose');
const Event = mongoose.model('Event');

const { getStatusOfDate } = require('../utils');

module.exports = () => {
  cron.schedule('* * * * *', async () => {
    console.log('running a task every minute --> ', new Date());

    const events = await Event.find({})
    events.forEach( event => {
      const status = getStatusOfDate(event);

      if (event.status !== status) {
        event.status = status;
        event.save();
      }
    })

  });
};

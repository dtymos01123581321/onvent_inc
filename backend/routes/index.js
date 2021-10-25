const events = require('./events.route');

module.exports = app => {
  app.use('/events', events);

  app.use('*', (req, res) => res.status(404).send({ err: 'Not Found', data: null }));
};

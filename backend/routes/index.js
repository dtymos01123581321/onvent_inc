const events = require('./events.route');
const users = require('./users.route');

module.exports = app => {
  app.use('/events', events);
  app.use('/users', users);

  app.use('*', (req, res) => res.status(404).send({ err: 'Not Found', data: null }));
};

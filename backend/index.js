const path = require('path');
const express = require('express');
const app = express();

const keys = require('./utilities/config/keys');

app.use('/public', express.static(path.join(__dirname, 'public')))

require('./utilities/startup/bodyParser')(app);
require('./utilities/startup/db')('OnVent API');
const schedule = require('./utilities/startup/schedule');

require('./routes')(app);

schedule()

const server = app.listen(keys.apiPort, () => {
  console.info(`API listening on port ${keys.apiPort}`);
});

module.exports = server;

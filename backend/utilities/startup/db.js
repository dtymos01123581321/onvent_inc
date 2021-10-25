const mongoose = require('mongoose');
const keys = require('../config/keys');

module.exports = () => {
  mongoose.connect(keys.mongoUri, {
    useNewUrlParser: true
  }, function(err, res) {

    if (err) {
      return console.error('Error connecting to "%s":', keys.mongoUri, err);
    }
    console.log('Connected successfully to "%s"', keys.mongoUri);
  });

  mongoose.Promise = global.Promise;
  require('../../models/event.model');
};

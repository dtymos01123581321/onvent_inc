const bodyParser = require('body-parser');
const formData = require("express-form-data");
const cors = require('cors');

const options = {
  autoClean: true
};

module.exports = app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(cors());
};

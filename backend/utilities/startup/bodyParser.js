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


//   app.use(formData.parse(options));
// // clear from the request and delete all empty files (size == 0)
//   app.use(formData.format());
// // change file objects to stream.Readable
//   app.use(formData.stream());
// // union body and files
//   app.use(formData.union());
};

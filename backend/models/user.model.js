const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  image: { type: String, default: '' },
  events:[{
    type: Schema.Types.ObjectId, ref: "Event"
  }]
});

mongoose.model('User', schema);

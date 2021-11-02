const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { NEW, IN_PROGRESS, CLOSED } = require('../utilities/constants');

const schema = new Schema({
  eventName: { type: String, required: true },
  location: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  submittedAt: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  user:{ type: Schema.Types.ObjectId, ref: "User" },
  status: { type: String, enum : [NEW, IN_PROGRESS, CLOSED], default: NEW}
});

mongoose.model('Event', schema);

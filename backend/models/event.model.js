const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  eventName: { type: String, required: true },
  location: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  submittedAt: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  user:{ type: Schema.Types.ObjectId, ref: "User" }
});

mongoose.model('Event', schema);

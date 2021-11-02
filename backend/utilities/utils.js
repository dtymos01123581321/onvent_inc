const {
  NEW,
  IN_PROGRESS,
  CLOSED
} = require('./constants');

const getStatusOfDate = ({
  startDate,
  endDate
}) => {
  const currentDate = new Date().getTime();

  if (startDate.getTime() < currentDate && currentDate < endDate.getTime()) {
    return IN_PROGRESS;
  }

  if (currentDate > endDate.getTime()) {
    return CLOSED;
  }

  return NEW;
};

module.exports = {
  getStatusOfDate
};

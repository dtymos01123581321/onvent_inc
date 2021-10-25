module.exports = {
  apiPort: process.env.BACKEND_PORT || 6101,
  mongoUri: process.env.MONGO_DB_URL || 'mongodb://localhost:27017/onvent-database',
};

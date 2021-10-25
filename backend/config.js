const config = {
  development: {
    port: 8500,
  }
};

module.exports = config[process.env.NODE_ENV];

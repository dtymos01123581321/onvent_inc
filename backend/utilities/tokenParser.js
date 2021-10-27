
module.exports = (req) => {
  const auth = req.headers ? req.headers.authorization || null : null;
  if (!auth) {
    return null
  }

  const parts = auth.split(' ');
  if (parts.length < 2) {
    return null
  }

  const schema = parts.shift().toLowerCase();
  const token = parts.join(' ');
  if (schema !== 'bearer') {
    return null
  }

  return token
};

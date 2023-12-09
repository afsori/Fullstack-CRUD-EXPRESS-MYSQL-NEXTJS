const logRequest = (req, res, next) => {
  console.log('middleware 1 berjalan', req.path);
  next();
}

module.exports = {logRequest};
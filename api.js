exports.respond = function(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}
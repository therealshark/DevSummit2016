const Manufacturer = require("./entities/manufacturer.js");
const Product = require("./entities/product.js");
const request = require("request-promise");

exports.respond = function(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

exports.registerProducer = function() {
  request.post("https://kproductor-register.herokuapp.com/api/manufacturer", {
    body: new Manufacturer("https://devsummit2015producer.herokuapp.com", "Mirco's Manufacturer", new Product(2, 3, 4)).toLiteral(),
    json: true
  });
};
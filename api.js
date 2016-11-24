const Manufacturer = require("./entities/manufacturer.js");
const Product = require("./entities/product.js");
const request = require("request-promise");

module.exports.onOrder = function(req, res, next) {
  console.log(req.body);
  res.json({message: "I guess an order is incoming here: "});
  next();
};

module.exports.registerManufacturer = function() {
  request.post("https://kproductor-register.herokuapp.com/api/manufacturer", {
    body: new Manufacturer("https://devsummit2015producer.herokuapp.com", "Mirco's Manufacturer", new Product(2, 3, 4)).toLiteral(),
    json: true
  });
};
function Product(quality, costs, time) {
  this.quality = quality;
  this.costs = costs;
  this.time = time;
}

Product.prototype.toLiteral = function() {
  return {
    quality: this.quality,
    costs: this.costs,
    time: this.time
  };
};

module.exports = Product;

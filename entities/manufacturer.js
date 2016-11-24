

function Manufacturer(address, name, product) {
  this.address = address;
  this.name = name;
  this.product = product;
}

Manufacturer.prototype.toLiteral = function() {
  return {
    address: this.address,
    name: this.name,
    product: this.product.toLiteral()
  };
};

module.exports = Manufacturer;

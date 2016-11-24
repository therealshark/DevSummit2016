// manfuactorurDTO {address: "1.2.3.4", name: "test client", product: { quality: 20, costs: 10, time: 20 } }

exports.manufacturerDTO = function(address, name, productQuality, productCosts, productTime) {
  return {
    address,
    name,
    product: {
      quality: productQuality,
      costs: productCosts,
      time: productTime
    }
  };
};

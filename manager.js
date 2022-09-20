let products = require("./data/products.js");

class Manager {
  findAll = () => {
    return products;
  };

  save = (product) => {
    let id;
    if (products.length === 0) id = 1;
    else products[products.length - 1].id + 1;
    product.price = parseInt(product.price);
    product = {
      id,
      ...product,
    };
    products.push(product);
    return product;
  };
}

module.exports = Manager;

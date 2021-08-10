const ProductModel = require('../models/products');
const { search } = require('../routes/routes');


async function get(req, res) {
  const { id } = req.params;

  const obj = id ? { _id: id } : null;
  
  const products = await ProductModel.find(obj);

  res.send(products);

}

module.exports = {
  get,
};
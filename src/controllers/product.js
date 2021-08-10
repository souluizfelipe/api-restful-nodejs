const ProductModel = require('../models/products');

async function get(req, res) {
  const { id } = req.params;

  const obj = id ? { _id: id } : null;
  
  const products = await ProductModel.find(obj);

  res.send(products);

}

async function post(req, res) {
  const {
    name,
    brand,
    price,
  } = req.body;

  const product = await new ProductModel({
    name,
    brand,
    price,
  });

  product.save();

  res.send({
    message: 'success',
  });
};

async function put(req, res) {
  const { id } = req.params;

  const product = await ProductModel.findOneAndUpdate({ _id: id }, req.body, { new: true });

  res.send({
    message: 'success',
    product,
  });
};


async function remove(req, res) {
  const { id } = req.params;

  const remove = await ProductModel.deleteOne({ _id: id });

  const message = remove.ok ?  'success': 'error removing item';

  res.send({
    message: message,
  });
};

module.exports = {
  get,
  post,
  put,
  remove,
};
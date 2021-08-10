const router = require('express').Router();
const ProductController = require('../controllers/product');

router.get('/products', ProductController.get);

module.exports = router
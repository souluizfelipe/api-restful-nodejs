const router = require('express').Router();
const ProductController = require('../controllers/product');

router.get('/products/:id?', ProductController.get);

module.exports = router
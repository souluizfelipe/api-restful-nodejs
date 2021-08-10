const router = require('express').Router();
const ProductController = require('../controllers/product');

router.get('/products/:id?', ProductController.get);
router.post('/products/', ProductController.post);

module.exports = router
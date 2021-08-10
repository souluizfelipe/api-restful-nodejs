const router = require('express').Router();

router.get('/products', (req, res) => {
  res.send({
    "hello":"world"
  })
});

module.exports = router
const router = require('express').Router();

router.get('/cart', async (req, res) => {console.log('inside the cart')
    try {
      
      // Pass serialized data and session flag into template
      res.render('cart');
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports=router
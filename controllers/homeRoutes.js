const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home', {title: 'TechBuilds', home_active: true, logged_in: req.session.logged_in, username: req.session.username});
})

router.get('/products', (req, res) => {
    res.render('products', {title: 'Products', products_active: true, logged_in: req.session.logged_in});
})

router.get('/aboutus', (req, res) => {
  res.render('aboutus', {title: 'About Us', aboutus_active: true, logged_in: req.session.logged_in});
})

router.get('/login', (req, res) => {
    res.render('login', {title: 'Login', login_active: true, logged_in: req.session.logged_in});
})

router.get('/register', (req, res) => {
  res.render('register', {title: 'Register', login_active: true, logged_in: req.session.logged_in})
})

router.get('/cart', async (req, res) => {console.log('inside the cart')
    try {
      
      // Pass serialized data and session flag into template
      res.render('cart');
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports=router

const router = require('express').Router();
const {Cart, Products, Brand, Category, CartItem} = require('../models')
router.get('/', (req, res) => {
    res.render('home', {title: 'TechBuilds', home_active: true, logged_in: req.session.logged_in, username: req.session.username});
})

router.get('/products', (req, res) => {
    res.render('products', {title: 'Products', products_active: true, logged_in: req.session.logged_in});
})

router.get('/aboutus', (req, res) => {
  res.render('aboutus', {title: 'About Us', aboutus_active: true, logged_in: req.session.logged_in});
})

router.get('/contactus', (req, res) => {
  res.render('contactus', {title: 'Contact Us', contactus_active: true, logged_in: req.session.logged_in})
})

router.get('/login', (req, res) => {
    res.render('login', {title: 'Login', login_active: true, logged_in: req.session.logged_in});
})

router.get('/register', (req, res) => {
  res.render('register', {title: 'Register', login_active: true, logged_in: req.session.logged_in})
})

router.get('/cart', async (req, res) => {
    try {
      // Get all projects and JOIN with user data
    const cartData = await Cart.findAll({
      where: {
        user_id: req.session.user_id
      }
    })

    //find the cart that is associated to the user that made the request
    const cartUserID = cartData[0].get().id;
    console.log(cartUserID);
    
    const productData = await CartItem.findAll({
      where: {
        cart_id: cartUserID
      },
      include: 
        {
          model: Products,
        }
    });

    // Serialize data so the template can read it
    const products = productData.map((product) => product.get({plain: true}));
    console.log(products);
      // Pass serialized data and session flag into template
      res.render('cart',{products});
    } catch (err) {
      res.status(500).json(err);
      console.log(err)
    }
  });

  module.exports=router

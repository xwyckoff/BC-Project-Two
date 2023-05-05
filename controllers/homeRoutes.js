const router = require('express').Router();
const {Cart,Product}=require('../models')
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
      // Get all projects and JOIN with user data
    const productData = await Cart.findAll({
      where:{
        id:req.session.user_id
      }
      // include: [
      //   {
      //     model: Product,
      //     attributes: ['name'],
      //   },
      // ],
    });

    // Serialize data so the template can read it
    const products = productData.map((product) => product.get({ plain: true }));
 
      // Pass serialized data and session flag into template
      res.render('cart',{products});
    } catch (err) {
      res.status(500).json(err);
      console.log(err)
    }
  });

  module.exports=router

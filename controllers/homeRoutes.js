const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home', {title: 'TechBuilds', home_active: true});
})

router.get('/products', (req, res) => {
    res.render('products', {title: 'Products', products_active: true});
})

router.get('/login', (req, res) => {
    res.render('login', {title: 'Login', login_active: true});
})

module.exports = router;
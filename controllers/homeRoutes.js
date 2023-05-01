const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home', {title: 'TechBuilds'});
})

module.exports = router;
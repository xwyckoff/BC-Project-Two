const router = require('express').Router();
const api = require('./api/index')
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', api);

module.exports = router;
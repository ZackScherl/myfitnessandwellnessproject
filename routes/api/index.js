const router = require('express').Router();
const login = require('./loginRoutes');

router.use('/login', loginRoutes);

module.exports = router;
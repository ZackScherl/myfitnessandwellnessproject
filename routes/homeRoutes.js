const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render("home")
});

router.get('/e-book', async (req, res) => {
  res.render("e-book")
});



module.exports = router;

const express = require('express')
const router = express.Router()

router.get('/login', (req, res) => {
  res.render('login', { flash: req.flash('error') })
})

router.get('/',
  // ensureLoggedIn(),
  (req, res) => {
    res.render('index')
  }
)

router.get('/register', (req, res) => {
  res.render('register', { flash: req.flash('error') })
})

module.exports = router

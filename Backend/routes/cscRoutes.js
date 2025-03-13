// routes/cscRoutes.js
const express = require('express');
const router = express.Router();
const cscController = require('../controllers/cscController');
const config = require('../config/config');
// Route to handle the login (redirects to CSC login page)
router.get('/login', (req, res) => {
  const authorizationUrl = `http://localhost/Connect_v1/User.php`;
  res.redirect(authorizationUrl);
});

// Callback route after CSC login
router.get('/callback', cscController.handleCscCallback);

module.exports = router;

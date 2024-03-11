const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
  res.json({name: req.query.name});
});

router.post('/users', (req, res) => {
  res.json({name: req.body.name, email: req.body.email, password: req.body.password});
});

module.exports = router;
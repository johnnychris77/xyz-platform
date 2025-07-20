const express = require('express');
const router = express.Router();

router.get('/admin', (req, res) => {
  res.status(200).json({ message: 'Admin route working' });
});

module.exports = router;

const express = require('express');
const router = express.Router();

// @route       GET api/auth
// @description Test Router
// @access      Public
router.get('/', (req, res) => res.send('Auth Route'));

module.exports = router;

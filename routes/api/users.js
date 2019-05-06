const express = require('express');
const router = express.Router();

// @route       GET api/users
// @description Test Router
// @access      Public
router.get('/', (req, res) => res.send('Users Route'));

module.exports = router;

const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

// @route       POST api/users
// @description Register user
// @access      Public
router.post(
  '/',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please make sure email is valid').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({
      min: 6
    })
  ],
  (req, res) => {
    const errors = validationResult(req);
    // If there are errors, send error 400(bad request)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send('Users Route');
  }
);

module.exports = router;

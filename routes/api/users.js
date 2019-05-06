const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator/check');

const User = require('../../models/User');

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
  async (req, res) => {
    const errors = validationResult(req);
    // If there are errors, send error 400(bad request)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // Check if user exists
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists with that email' }] });
      }

      // Get user's gravatar
      const avatar = gravatar.url(email, {
        // size, rating, default image
        s: '200',
        r: 'pg',
        d: 'mm'
      });
      user = new User({
        name,
        email,
        avatar,
        password
      });

      // Encypt password using bcrypt

      const salt = await bcrypt.genSalt(10);

      // creates a hash and puts it into user password
      user.password = await bcrypt.hash(password, salt);

      // Put await in front of anything that returns a promise
      await user.save();

      // Return jsonwebtoken

      res.send('User is registered');
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;

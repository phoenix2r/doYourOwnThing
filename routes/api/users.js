const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post(
  '/', 
  [
  check('username', 'Name is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
  check('role', 'Please specify whether you want to pitch or sponsor a project').not().isEmpty()
  ], 
  async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password, role } = req.body; 

    
    try {
      // See if the user exists
      let user = await User.findOne({ email });

      if(user) {
        return res.status(400).json({ errors: [ { msg: 'User already exists' } ] });
      }

      // Create an instance of the user (not saved yet)
      user = new User({
        username,
        email,
        password,
        role
      });

      // Encrypt password (using bcrypt)
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      // Save the user to the database
      await user.save();

      // Return jsonwebtoken (this will enable autologging in)
      const payload = {
        user: {
          id: user.id
        }
      }

      // @todo: the jwt is currently set to expire after a long time - change to 3600 to have it expire after 1 hour
      jwt.sign(
        payload, 
        config.get('jwtSecret'), 
        { expiresIn: 360000 }, 
        (err, token) => {
          if(err) throw err;
          res.json({ token });
        }
      );

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }

  }
);

module.exports = router;
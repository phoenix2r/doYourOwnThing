const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Pitcher = require('../../models/Pitcher');
const User = require('../../models/User');

// @route   GET api/pitcher-profiles/me
// @desc    Get current user's profile
// @access  Private
router.get('/me', auth, async (req, res) => {
  try {
    const pitcherProfile = await Pitcher.findOne({ user: req.user.id }).populate('user', 'name');  
    
    if(!pitcherProfile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }

    res.json(pitcherProfile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/pitcher-profiles
// @desc    Create or update a pitcher profile
// @access  Private
router.post('/', [ 
    auth, 
    [
      check('firstName', 'First name is required').not().isEmpty(),
      check('lastName', 'Last name is required').not().isEmpty(),
      check('addressLine1', 'Address number and road is required').not().isEmpty(),
      check('postcode', 'Address postcode is required').not().isEmpty(),
    ] 
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      firstName,
      lastName,
      addressLine1,
      town,
      postcode,
      bankName,
      bankSortCode,
      bankAcctNo,
      bio
    } = req.body;

    // Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    // Build fullName object
    profileFields.fullName = {}
    if(firstName) profileFields.fullName.firstName = firstName;
    if(lastName) profileFields.fullName.lastName = lastName;
    // Build Address object
    profileFields.address = {}
    if(addressLine1) profileFields.address.addressLine1 = addressLine1;
    if(town) profileFields.address.town = town;
    if(postcode) profileFields.address.postcode = postcode;

    if(bankName) profileFields.bankName = bankName;
    if(bankSortCode) profileFields.bankSortCode = bankSortCode;
    if(bankAcctNo) profileFields.bankAcctNo = bankAcctNo;
    if(bio) profileFields.bio = bio;

    try {
      let pitcher = await Pitcher.findOne({ user: req.user.id });

      if(pitcher) {
        // Update
        pitcher = await Pitcher.findOneAndUpdate(
          { user: req.user.id }, { $set: profileFields }, { new: true }
        );

        return res.json(pitcher);
      }

      // Create
      pitcher = new Pitcher(profileFields);

      await pitcher.save();
      res.json(pitcher);

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   GET api/pitcher-profiles
// @desc    Get all pitchers' profile
// @access  Prublic
router.get('/', async (req, res) => {
  try {
    // @todo - populate this find with the avatars once they are implemented.
    const pitchers = await Pitcher.find();
    res.json(pitchers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
    
  }
});

// @route   GET api/pitcher-profiles/user/:user_id
// @desc    Get all pitcher profile by user id
// @access  Prublic
router.get('/user/:user_id', async (req, res) => {
  try {
    // @todo - populate this find with the avatars once they are implemented.
    const pitcher = await Pitcher.findOne({ user: req.params.user_id });

    if(!pitcher) {
      return res.status(400).json({ msg: 'Profile not found'});
    }

    res.json(pitcher);
  } catch (err) {
    console.error(err.message);
    if(err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found'});
    }
    res.status(500).send('Server Error');
    
  }
});

// @route   DELTE api/pitcher-profiles
// @desc    Delete pitcher's profile, user and projects
// @access  Private
router.delete('/', auth, async (req, res) => {
  try {
    // @todo - remove user's projects
    // Remove profile
    await Pitcher.findOneAndRemove({ user: req.user.id });
    // Remove User
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
    
  }
});

module.exports = router;
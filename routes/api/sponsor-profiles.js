const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Sponsor = require('../../models/Sponsor');
const User = require('../../models/User');

// @route   GET api/sponsor-profiles/me
// @desc    Get current user's profile
// @access  Private
router.get('/me', auth, async (req, res) => {
  try {
    const sponsorProfile = await Sponsor.findOne({
      user: req.user.id,
    }).populate('user', 'name');
    if (!sponsorProfile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }

    res.json(sponsorProfile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/sponsor-profiles
// @desc    Create or update a sponsor profile
// @access  Private
router.post(
  '/',
  [
    auth,
    [
      check('firstName', 'First name is required').not().isEmpty(),
      check('lastName', 'Last name is required').not().isEmpty(),
      check('addressLine1', 'Address number and road is required')
        .not()
        .isEmpty(),
      check('postcode', 'Address postcode is required').not().isEmpty(),
      check(
        'visibility',
        'Please specify if you want to be seen or remain anonymous'
      )
        .not()
        .isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      firstName,
      lastName,
      addressLine1,
      town,
      postcode,
      visibility,
      organisation,
      sponsorLogo,
      interests,
      bio,
    } = req.body;

    // Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    // Build fullName object
    profileFields.fullName = {};
    if (firstName) profileFields.fullName.firstName = firstName;
    if (lastName) profileFields.fullName.lastName = lastName;
    // Build Address object
    profileFields.address = {};
    if (addressLine1) profileFields.address.addressLine1 = addressLine1;
    if (town) profileFields.address.town = town;
    if (postcode) profileFields.address.postcode = postcode;

    if (visibility) profileFields.visibility = visibility;
    if (organisation) profileFields.organisation = organisation;
    if (sponsorLogo) profileFields.sponsorLogo = sponsorLogo;
    if (interests) profileFields.interests = interests;
    if (bio) profileFields.bio = bio;

    try {
      let sponsor = await Sponsor.findOne({ user: req.user.id });

      if (sponsor) {
        // Update
        sponsor = await Sponsor.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );

        return res.json(sponsor);
      }

      // Create
      sponsor = new Sponsor(profileFields);

      await sponsor.save();
      res.json(sponsor);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   GET api/sponsor-profiles
// @desc    Get all sponsors' profile
// @access  Prublic
router.get('/', async (req, res) => {
  try {
    // @todo - populate this find with the avatars once they are implemented.
    const sponsors = await Sponsor.find();
    res.json(sponsors);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/sponsor-profiles/user/:user_id
// @desc    Get sponsor profile by user id
// @access  Prublic
router.get('/user/:user_id', async (req, res) => {
  try {
    // @todo - populate this find with the avatars once they are implemented.
    const sponsor = await Sponsor.findOne({ user: req.params.user_id });

    if (!sponsor) {
      return res.status(400).json({ msg: 'Profile not found' });
    }

    res.json(sponsor);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   DELTE api/sponsor-profiles
// @desc    Delete sponsor's profile, user and projects
// @access  Private
router.delete('/', auth, async (req, res) => {
  try {
    // @todo - remove user's projects
    // Remove profile
    await Sponsor.findOneAndRemove({ user: req.user.id });
    // Remove User
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

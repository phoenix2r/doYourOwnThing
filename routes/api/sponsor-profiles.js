const express = require('express');
const router = express.Router();

// @route   GET api/sponsor-profiles
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('Sponsor Profiles route'));

module.exports = router;
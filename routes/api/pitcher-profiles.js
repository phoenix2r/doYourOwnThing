const express = require('express');
const router = express.Router();

// @route   GET api/pitcher-profiles
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('Pitcher Profiles route'));

module.exports = router;
const mongoose = require('mongoose');

const SponsorSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  fullName: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  address: {
    addressLine1: {
      type: String,
      required: true,
    },
    town: {
      type: String,
    },
    postcode: {
      type: String,
      required: true,
    },
  },
  interests: [
    {
      tag: String,
    },
  ],
  bio: {
    type: String,
  },
});

module.exports = Sponsor = mongoose.model('sponsor', SponsorSchema);

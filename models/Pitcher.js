const mongoose = require('mongoose');

const PitcherSchema = new mongoose.Schema({
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
  profileImage: {
    type: String,
  },
  // Pitcher only
  bio: {
    type: String,
  },
  // List the Pitches associated with this profile
  // pitches: {
  //   type:[mongoose.Schema.Types.ObjectId],
  //   ref: 'pitches'
  // }
});

module.exports = Pitcher = mongoose.model('pitcher', PitcherSchema);

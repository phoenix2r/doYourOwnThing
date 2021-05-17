const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  projectAuthor: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  amountReq: {
    type: Number,
    required: true,
  },
  amountSoFar: {
    type: Number,
  },
  purpose: {
    type: String,
  },
  projectName: {
    type: String,
    required: true,
  },
  sector: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  keywords: {
    type: [String],
  },
  // The video will be an embedded url
  video: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  endDate: {
    type: Date,
  },
  gofundme: {
    type: String,
    required: true,
  },
  socialLinks: [
    {
      social: {
        type: String,
      },
    },
  ],
  sponsors: [
    {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  ],
  // Possible functionality for interaction later
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    },
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      text: {
        type: String,
        required: true,
      },
      name: {
        type: String,
      },
      avatar: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

module.exports = Project = mongoose.model('project', ProjectSchema);

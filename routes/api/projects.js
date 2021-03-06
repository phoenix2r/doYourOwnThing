const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Project = require('../../models/Project');
const Pitcher = require('../../models/Pitcher');
const User = require('../../models/User');

// @route   POST api/projects
// @desc    Create a project
// @access  Private
router.post(
  '/',
  [
    auth,
    [
      check('amountReq', 'Please let us know how much your project requires')
        .not()
        .isEmpty(),
      check(
        'projectName',
        'Please let us know what you want to call your project'
      )
        .not()
        .isEmpty(),
      check('sector', 'Please let us know what type of business this is')
        .not()
        .isEmpty(),
      check('description', 'Please describe your project').not().isEmpty(),
      check('keywords', 'Please add at least one keyword').not().isEmpty(),
      check('video', 'Please upload a video pitch').not().isEmpty(),
      check('gofundme', 'Please provide your Go Fund Me link').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await (
        await User.findById(req.user.id)
      ).isSelected('-password');

      const newProject = new Project({
        projectAuthor: req.user.id,
        amountReq: req.body.amountReq,
        projectName: req.body.projectName,
        sector: req.body.sector,
        description: req.body.description,
        keywords: req.body.keywords,
        video: req.body.video,
        gofundme: req.body.gofundme,
        socialLinks: req.body.socialLinks,
      });

      const project = await newProject.save();

      res.json(project);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   GET api/projects
// @desc    Get all projects
// @access  Public
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ date: -1 });
    res.json(projects);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/projects/:id
// @desc    Get project by id
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ msg: 'Project not found' });
    }
    res.json(project);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Project not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   GET api/projects/:userid
// @desc    Get all the projects by a certain user
// @access  Public
router.get('/user/:userid', async (req, res) => {
  try {
    const projects = await Project.find({
      projectAuthor: req.params.userid,
    }).sort({ date: -1 });

    if (!projects) {
      return res.status(404).json({ msg: 'This user has no projects' });
    }
    res.json(projects);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Projects not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   GET api/projects/:sponsorid
// @desc    Get all the projects that has a sponsorid in its sponsor array
// @access  Public
router.get('/sponsor/:sponsorid', async (req, res) => {
  try {
    const projects = await Project.find({
      sponsors: req.params.sponsorid,
    }).sort({ date: -1 });

    if (projects.length === 0) {
      return res.status(404).json({ msg: 'This sponsor has no projects' });
    }
    res.json(projects);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Projects not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   GET api/projects/match/:sponsorid
// @desc    Get all the projects that match a sponsor's interests
// @access  Public
router.get('/match/:sponsorid', async (req, res) => {
  try {
    // get sponsor profile
    const sponsor = await Sponsor.findOne({
      user: req.params.sponsorid,
    });

    // destructure the interests from the profile
    const { interests } = sponsor;

    // match the interests to the Project keywords
    const projects = await Project.find({
      keywords: { $in: interests },
    }).sort({ date: -1 });

    if (!projects) {
      return res
        .status(404)
        .json({ msg: 'There are no projects that match these tags' });
    }
    res.json(projects);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Projects not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   GET api/projects/search/:searchterms
// @desc    Find projects by search keywords
// @access  Public
router.get('/search/search', async (req, res) => {
  try {
    // match the interests to the Project keywords
    let searchTerms = req.query.searchTerms.split(',');
    console.log(searchTerms);
    const projects = await Project.find({
      keywords: { $in: searchTerms },
    }).sort({ date: -1 });

    if (!projects || projects.length === 0) {
      return res
        .status(404)
        .json({ msg: 'There are no projects that match these keywords' });
    }
    res.json(projects);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Projects not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   GET api/projects/latest
// @desc    Find projects by search keywords
// @access  Public
router.get('/latest', async (req, res) => {
  console.log('At the route');
  try {
    // get the latest projects
    const projects = await Project.find().sort({ date: -1 }).limit(5);

    if (!projects || projects.length === 0) {
      return res.status(404).json({ msg: 'No projects to display' });
    }
    res.json(projects);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Projects not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/projects/:id
// @desc    Delete a project
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ msg: 'Project not found' });
    }

    // Check user
    if (project.projectAuthor.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not auhtorised' });
    }

    await project.remove();

    res.json({ msg: 'Project removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Project not found' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;

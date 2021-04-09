const mongoose = require('mongoose');
const Schema = mongoos.Schema;

const ProjectSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  
})
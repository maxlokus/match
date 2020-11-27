const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  // userName: {
  //   type: String,
  //   required: true
  // },
  // password: {
  //   type: String,
  //   required: true
  // }
});

module.exports = mongoose.model('Posts', PostSchema);

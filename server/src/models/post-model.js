const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    // unique: true,
  },
  description: {
    type: String,
  },
});

const PostModel = mongoose.model('Posts', PostSchema);
module.exports = PostModel;

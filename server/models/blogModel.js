const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: String,
  content: String,
  author: [{
    type: Schema.Types.ObjectId,
    ref: 'user'
  }]
})

const blog = mongoose.model('blog', blogSchema)

module.exports = blog

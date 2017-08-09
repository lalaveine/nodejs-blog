const mongoose = require('mongoose');


let postSchema = new mongoose.Schema({
  pageHeader: {
    background: { type: String, required: true, "default": "/images/post-bg.jpg" },
    heading: { type: String, required: true, index: { unique: true }, "default": "Sample title" },
    subheading: { type: String },
    postedBy: { type: String, required: true, "default": "Author" },
    postedOn: { type: String, required: true }
  },
  postUrl: { type: String, required: true, index: { unique: true } },
  lastUpdated: { type: String, "default": "Never" },
  editedBy: { type: String },
  content: { type: String, required: true }
});

mongoose.model('Post', postSchema, 'Posts');
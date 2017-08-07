var mongoose = require( 'mongoose' );

var postSchema = new mongoose.Schema({
  pageHeader: {
    background: { type: String, "default": "/images/post-bg.jpg" },
    heading: { type: String, required: true, "default": "Sample title" },
    subheading: { type: String, "default": "Sample subtitle" },
    posted_by: { type: String, required: true, "default": "Author" },
    posted_on: { type: String, required: true, "default": "August 24, 2014" }
  },
  content: {type: String, required: true, "default": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
});
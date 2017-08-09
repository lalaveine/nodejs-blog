const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/posts');

router.get('/posts', ctrlLocations.postsList);
router.post('/posts', ctrlLocations.postsCreate);
router.get('/posts/:postId', ctrlLocations.postsReadOne);
router.put('/posts/:postId', ctrlLocations.postsUpdateOne);
router.delete('/posts/:postId', ctrlLocations.postsDeleteOne);

module.exports = router;
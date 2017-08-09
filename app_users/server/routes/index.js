const express = require('express');
const ctrlMain = require('../controllers/main');
const router = express.Router();


/* GET 'home' page. */
router.get('/', ctrlMain.home);

/* GET 'about' page. */
router.get('/about', ctrlMain.about);

/* GET 'post' page. */
router.get('/posts/:postId', ctrlMain.post);

/* GET 'contact' page. */
router.get('/contact', ctrlMain.contact);


module.exports = router;

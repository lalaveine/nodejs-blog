var express = require('express');
var ctrlMain = require('../controllers/main');
var router = express.Router();


/* GET 'home' page. */
router.get('/', ctrlMain.home);

/* GET 'about' page. */
router.get('/about', ctrlMain.about);

/* GET 'post' page. */
router.get('/post', ctrlMain.post);

/* GET 'contact' page. */
router.get('/contact', ctrlMain.contact);


module.exports = router;

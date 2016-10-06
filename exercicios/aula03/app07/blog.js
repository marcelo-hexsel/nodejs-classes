var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
    console.log(Date.now());
    next();
});

router.get('/', function(req, res) {
    console.log('Blog - Home');
    res.send('Blog - Home');
});

router.get('/about', function(req, res) {
    console.log('Blog - About');
    res.send('Blog - About');
});

module.exports = router;

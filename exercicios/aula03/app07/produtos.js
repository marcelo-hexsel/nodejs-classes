var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
    console.log(Date.now());
    next();
});

router.get('/', function(req, res) {
    console.log('Produtos - Home');
    res.send('Produtos - Home');
});

router.get('/about', function(req, res) {
    console.log('Produtos - About');
    res.send('Produtos - About');
});

module.exports = router;

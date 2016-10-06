var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
    console.log(Date.now());
    next();
});

router.get('/', function(req, res) {
    console.log('Clientes - Home');
    res.send('Clientes - Home');
});

router.get('/about', function(req, res) {
    console.log('Clientes - About');
    res.send('Clientes - About');
});

module.exports = router;

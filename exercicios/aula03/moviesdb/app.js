var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");
var app = express();
var exphbs = require('express-handlebars')

app.use(bodyParser.urlencoded({
    extended: false
}));

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/populares/', function(req, res) {
    res.render('populares', {
        title: 'Filmes Populares'
    });
});

app.get('/usuario/:nome', function(req, res) {
    res.render('home', {
        title: 'Olá' + req.params.nome
    });
});

app.get('/ip/', function(req, res) {
    request.get({
        url: 'https://ipinfo.io/json'
    }, function(err, res2) {
        res.json(JSON.parse(res2.body));
    });
});

app.get('/local/', function(req, res) {
    request.get({
        url: 'https://ipinfo.io/json'
    }, function(err, res2) {
        console.log(res2.body);
        var jsonObj = JSON.parse(res2.body);
        res.render('local', {
            cidade: jsonObj.city,
            estado: jsonObj.region,
            lat_lon: jsonObj.loc
        });
    });
});



app.post('/login', function(req, res) {
    var user_name = req.body.user;
    var password = req.body.password;
    console.log("From Client pOST request: User name = " + user_name + " and password is " + password);
    res.end("yes");
});


app.listen(3000, function() {
    console.log("Started on PORT 3000");
})

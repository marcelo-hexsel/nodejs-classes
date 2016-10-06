var express = require("express");
var app = express();
var clientes_routes = require('./clientes');
var produtos_routes = require('./produtos');
var blog_routes = require('./blog');

app.use('/cliente', clientes_routes);

app.use('/produto', produtos_routes);

app.use('/blog', blog_routes);

app.listen(3000, function() {
    console.log("Modular Routes Started in port 3000");
})

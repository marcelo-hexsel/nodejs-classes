var bemvindo = require('./bemvindo');
var contato = require('./contato');
var index = require('./index');
var http = require('http');

var server = http.createServer(function(request, response) {
    response.writeHead(200, {
        "Content-Type": "text/html"
    });
    if (request.url == "/") {
        index();
    } else if (request.url == "/bemvindo") {
        bemvindo();
    } else if (request.url == "/contato") {
        contato();
    }
    response.end();
});
server.listen(3000, function() {
    console.log('Servidor rodando!');
});

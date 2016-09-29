var http = require('http');
var server = http.createServer(function(req, resp) {
    resp.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
    });
    if (req.url == "/") {
        resp.write("<h1>Página Principal</h1>");
    } else if (req.url == "/bemvindo") {
        resp.write("<h1>Bem Vindo =D</h1>");
    } else {
        resp.write("<h1>Página não encontrada =|</h1>");
    }
    resp.end();
});
server.listen(3000, function() {
    console.log('Servidor rodando!');
});

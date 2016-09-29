var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
    response.writeHeader(200, {
        'Content-Type': 'text/html;charset=utf-8'
    });

    if (request.url == "/") {
        fs.readFile(__dirname + '/home.html', function(err, html) {
            response.write(html);
        });
    } else if (request.url == "/produtos") {
        fs.readFile(__dirname + '/produtos.html', function(err, html) {
            response.write(html);
        });
    } else if (request.url == "/contato") {
        fs.readFile(__dirname + '/contato.html', function(err, html) {
            response.write(html);
        });
    }

    response.end();
});

server.listen(3000, function() {
    console.log('Http server is listening');
});

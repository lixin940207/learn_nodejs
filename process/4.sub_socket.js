var http = require('http')

var server = http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain' });
    response.end('handled by child, pid is ' + process.pid + '\n')
})


process.on('message', function (m, tcp) {
    if (m === 'server') {
        tcp.on('connection', function (socket) {
            server.emit('connection', socket);
        });
    }
});

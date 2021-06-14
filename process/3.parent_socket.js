var child = require('child_process').fork('3.sub_socket.js');

// Open up the server object and send the handle
var server = require('net').createServer();

// 父进程和子进程都有可能处理客户端的请求
server.on('connection', function (socket) {
    socket.end('handled by parent\n');
});

server.listen(1337, function () {
    child.send('server', server);
});

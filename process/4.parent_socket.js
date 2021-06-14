var childProcess = require('child_process')
var child1 = childProcess.fork('4.sub_socket.js');
var child2 = childProcess.fork('4.sub_socket.js');

// Open up the server object and send the handle
var server = require('net').createServer();

// 主进程不再处理连接事件
// server.on('connection', function (socket) {
//     socket.end('handled by parent\n');
// });

server.listen(1337, function () {
    child1.send('server', server);
    child2.send('server', server);
    server.close();
});

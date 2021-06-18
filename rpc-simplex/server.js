const net = require('net')

// 和http不一样的是，http用的是request， response
// 这里用的是socket,socket指的是网络通路中写入和取出的代理对象
// 写入：socket.write(
// 读出：socket.on('data')
const server = net.createServer(socket => {
    socket.on('data', function (buffer) {
        console.log(buffer, buffer.toString())
    })
});

server.listen(3000)

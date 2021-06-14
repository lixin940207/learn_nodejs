// 接受来自父进程的消息
process.on('message', function (m) {
    console.log('CHILD got message:', m);
});
process.send({foo: 'bar'});//发给父进程

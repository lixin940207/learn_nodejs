var cp = require('child_process');
var n = cp.fork(__dirname + '/2.sub.js');

//接受来自子进程的消息
n.on('message', function (m) { console.log('PARENT got message:', m);
});
n.send({hello: 'world'});// 发给子进程

// 父进程和子进程都是独立的，不确定是父进程先收到消息还是子进程先收到消息

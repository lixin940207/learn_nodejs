const net = require('net')

const socket = new net.Socket({});

socket.connect({
    host: '127.0.0.1',
    port: 3000,
});

const lessonids = [
    "136797",
    "136798",
    "136799",
    "136800",
    "136801",
    "136803",
    "136804",
    "136806",
    "136807",
    "136808",
    "136809",
    "141994",
    "143517",
    "143557",
    "143564",
    "143644",
    "146470",
    "146569",
    "146582"
]

// let id = Math.floor(Math.random() * lessonids.length)
//
// // 把ID传给server
// socket.write(encode(id))

// 接受数据事件
socket.on('data', function (buffer) {

    const seq = buffer.slice(0,2);
    const title = buffer.slice(2)
    console.log(seq.readInt16BE(), title.toString())


    // id = Math.floor(Math.random() * lessonids.length)
    // socket.write(encode(id))

})

let seq = 0
function encode(id) {
    buffer = Buffer.alloc(6);
    buffer.writeInt16BE(seq);
    buffer.writeInt32BE(lessonids[id], 2);
    console.log(seq, lessonids[id]);
    seq++;
    return buffer;
}

setInterval(()=>{
    id = Math.floor(Math.random() * lessonids.length)
    socket.write(encode(id))
}, 500)

var http = require('http');
var url = require('url')
/*
request: 获取url传过来的信息
response: 给浏览器信息响应
 */
http.createServer(function (request,response){
    response.writeHead(200, {
        'Content-type':'text/html'
    });
    response.write("<head><meta charset='UTF-8'></head>")

    console.log(request.url)

    if (request.url != '/favicon.ico' ){
        var userinfo = url.parse(request.url, true).query;
        console.log(userinfo)
        console.log(`123姓名：${userinfo.name}--age${userinfo.age}`)
    }

    response.write("this is nodejs");
    response.end('你好 Hello World!');
    }
).listen(8081)
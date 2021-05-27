var http = require('http');
/*
request: 获取url传过来的信息
response: 给浏览器信息响应
 */
http.createServer(function (request,response){
    response.writeHead(200, {
        'Content-type':'text/plain'
    });
    response.write("<head><meta charset='UTF-8'></head>")
    response.write("this is nodejs");
    response.end('你好 Hello World!');
    }
).listen(8081)
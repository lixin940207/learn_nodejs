const http = require('http')
const url = require('url')
const routes = require("./module/routes.js")

const {getMime, getFileMime} = require("./module/routes.js")


http.createServer(function (request, response){
    //创建静态web服务
    routes.static(request, response, 'static')
    let pathName = url.parse(request.url).pathname;
    if(pathName ==='/login'){
        response.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
        response.end("login")
    } else if (pathName ==='/register'){
        response.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
        response.end("register")
    } else if (pathName ==='/admin'){
        response.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
        response.end("admin")
    } else{
        response.writeHead(404, {'Content-Type': 'text/html;charset="utf-8"'});
        response.end("page not exists.")
    }
}).listen(8081);

console.log('Server runing at 127.0.0.1:8081')
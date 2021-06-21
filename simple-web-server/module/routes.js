const fs = require('fs')
const path = require('path')
const url = require('url')

function getFileMime(extname) {

    var data = fs.readFileSync('./data/mime.json'); //同步方法
    let mimeObj = JSON.parse(data.toString());
    return mimeObj[extname];

}

function static(request, response, staticPath) {
    //获取地址
    let pathName = url.parse(request.url).pathname;
    pathName = pathName === '/' ? '/index.html' : pathName
    let extName = path.extname(pathName)
    if (pathName !== '/favicon.ico') {
        try {
            let data = fs.readFileSync('./' + staticPath + pathName)
            if (data) {
                let mime = getFileMime(extName);
                response.writeHead(200, {'Content-Type': '' + mime + ';charset="utf-8"'});
                response.end(data);
            }
        } catch (e) {
            console.error(e)
        }
    }

}

module.exports = {getFileMime, static}
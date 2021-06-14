const fs = require('fs')

var str = ''

for(var i=0;i<500;i++){
    str+="数据"
}

var writeStream = fs.createWriteStream('./data/output.txt')

writeStream.write(str)

writeStream.end();

writeStream.on('finish', ()=>{
    console.log("finish")
})
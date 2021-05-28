var fs = require('fs')

// wrong way!!!
var path = './upload'
var dirArr = []
fs.readdir(path, (err, files) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(`files:${files}`)
    for(var i =0; i<files.length;i++){
        fs.stat(path+'/'+files[i], (err1, stats) => {
            if(stats.isDirectory()){
                dirArr.push(files[i])
            }
        })
    }
})
console.log(`dirArr:${dirArr}`)

//微任务
// for(var i=0;i<3;i++){
//     setTimeout(function (){
//         console.log(i);
//     },100)
// }


//改造for循环，递归实现
var path = './upload'
var dirArr = []
fs.readdir(path, (err, files) => {
    if(err){
        console.log(err);
        return;
    }
    (function getDir(i){
        if(i===files.length){
            console.log(dirArr);
            return;
        }
        fs.stat(path+'/'+files[i], (err1, stats) => {
            if(stats.isDirectory()){
                dirArr.push(files[i]);
            }
            getDir(i+1);
        })
    })(0)
})
//console.log(`dirArr:${dirArr}`)